import { supabase } from '../lib/supabase';

export interface Report {
  id: string;
  title: string;
  description: string | null;
  file_name: string;
  file_type: string;
  file_size: number;
  file_url: string;
  storage_path: string | null;
  uploaded_by: string;
  uploaded_at: string;
  uploader?: {
    id: string;
    name: string;
  };
}

export async function uploadReportFile(file: File, userId: string): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('reports')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  const { data: { publicUrl } } = supabase.storage
    .from('reports')
    .getPublicUrl(fileName);

  return publicUrl;
}

export async function createReport(reportData: {
  title: string;
  description?: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  storagePath?: string;
  uploadedBy: string;
}): Promise<Report> {
  const { data, error } = await supabase
    .from('reports')
    .insert({
      title: reportData.title,
      description: reportData.description || null,
      file_name: reportData.fileName,
      file_type: reportData.fileType,
      file_size: reportData.fileSize,
      file_url: reportData.fileUrl,
      storage_path: reportData.storagePath || null,
      uploaded_by: reportData.uploadedBy
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create report: ${error.message}`);
  }

  return data;
}

export async function fetchReports(): Promise<Report[]> {
  const { data, error } = await supabase
    .from('reports')
    .select(`
      *,
      uploader:profiles!reports_uploaded_by_fkey(id, name)
    `)
    .order('uploaded_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch reports: ${error.message}`);
  }

  return data || [];
}

export async function deleteReport(reportId: string): Promise<void> {
  const { data: report } = await supabase
    .from('reports')
    .select('storage_path')
    .eq('id', reportId)
    .single();

  if (report?.storage_path) {
    await supabase.storage
      .from('reports')
      .remove([report.storage_path]);
  }

  const { error } = await supabase
    .from('reports')
    .delete()
    .eq('id', reportId);

  if (error) {
    throw new Error(`Failed to delete report: ${error.message}`);
  }
}

export async function downloadReport(report: Report): Promise<void> {
  if (report.storage_path) {
    const { data, error } = await supabase.storage
      .from('reports')
      .download(report.storage_path);

    if (error) {
      throw new Error(`Failed to download report: ${error.message}`);
    }

    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = report.file_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    const link = document.createElement('a');
    link.href = report.file_url;
    link.download = report.file_name;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
