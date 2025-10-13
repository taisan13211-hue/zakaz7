import React, { useState, useEffect } from 'react';
import { FileText, Upload, Download, Eye, Trash2, X, Plus, Search, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { useAuth } from '../../contexts/AuthContext';
import {
  Report as ReportType,
  fetchReports,
  createReport,
  deleteReport as deleteReportService,
  uploadReportFile,
  downloadReport as downloadReportService
} from '../../services/reportsService';

interface UploadReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File, title: string, description: string) => Promise<void>;
}

function UploadReportModal({ isOpen, onClose, onUpload }: UploadReportModalProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null as File | null
  });
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
          file.type === 'application/msword' || 
          file.type === 'text/plain') {
        setFormData(prev => ({ ...prev, file }));
      } else {
        alert('Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)');
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
          file.type === 'application/msword' || 
          file.type === 'text/plain') {
        setFormData(prev => ({ ...prev, file }));
      } else {
        alert('Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.file || !formData.title.trim() || !user) return;

    try {
      await onUpload(formData.file, formData.title, formData.description);
      setFormData({ title: '', description: '', file: null });
      onClose();
    } catch (error) {
      console.error('Error uploading report:', error);
      alert('Ошибка при загрузке отчета');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Загрузить отчет</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Название отчета *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Например: Отчет по проекту за февраль 2024"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Описание
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Краткое описание содержания отчета"
            />
          </div>

          {/* Upload Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Файл отчета *
            </label>
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".doc,.docx,.txt"
              />
              
              {formData.file ? (
                <div className="space-y-2">
                  <FileText className="h-12 w-12 text-green-600 mx-auto" />
                  <div>
                    <p className="font-medium text-gray-900">{formData.file.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(formData.file.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Удалить файл
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Перетащите файл сюда или нажмите для выбора
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Поддерживаются файлы Word (.doc, .docx) и текстовые файлы (.txt)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" disabled={!formData.file || !formData.title.trim()}>
              Загрузить отчет
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Reports() {
  const { user } = useAuth();
  const [reports, setReports] = useState<ReportType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      setLoading(true);
      const data = await fetchReports();
      setReports(data);
    } catch (error) {
      console.error('Error loading reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadReport = async (file: File, title: string, description: string) => {
    if (!user) return;

    try {
      const fileUrl = await uploadReportFile(file, user.id);
      const storagePath = `${user.id}/${file.name}`;

      await createReport({
        title,
        description,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        fileUrl,
        storagePath,
        uploadedBy: user.id
      });

      await loadReports();
    } catch (error) {
      console.error('Error uploading report:', error);
      throw error;
    }
  };

  const handleDeleteReport = async (reportId: string) => {
    if (!user) return;

    const report = reports.find(r => r.id === reportId);
    if (!report) return;

    const canDelete = user.role === 'admin' || user.id === report.uploaded_by;
    if (!canDelete) return;

    if (!confirm('Вы уверены, что хотите удалить этот отчет?')) return;

    try {
      await deleteReportService(reportId);
      await loadReports();
    } catch (error) {
      console.error('Error deleting report:', error);
      alert('Ошибка при удалении отчета');
    }
  };

  const handleDownloadReport = async (report: ReportType) => {
    try {
      await downloadReportService(report);
    } catch (error) {
      console.error('Error downloading report:', error);
      alert('Ошибка при скачивании отчета');
    }
  };

  const canViewReport = (report: ReportType): boolean => {
    if (user?.role === 'admin') return true;
    return user?.id === report.uploaded_by;
  };

  const canDeleteReport = (report: ReportType): boolean => {
    if (user?.role === 'admin') return true;
    return user?.id === report.uploaded_by;
  };

  const filteredReports = reports.filter(report => {
    const uploaderName = report.uploader?.name || 'Unknown';
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (report.description && report.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         uploaderName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && canViewReport(report);
  });

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('word') || fileType.includes('document')) {
      return <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <FileText className="h-6 w-6 text-blue-600" />
      </div>;
    }
    return <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
      <FileText className="h-6 w-6 text-gray-600" />
    </div>;
  };

  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Отчеты сотрудников</h1>
            <p className="text-gray-600 mt-1">
              {user?.role === 'admin' 
                ? 'Просматривайте отчеты всех сотрудников' 
                : 'Загружайте и управляйте своими отчетами'
              }
            </p>
          </div>
          <Button onClick={() => setShowUploadModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Загрузить отчет
          </Button>
        </div>

        {/* Поиск */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск отчетов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </CardContent>
        </Card>

        {/* Список отчетов */}
        <div className="space-y-4">
          {filteredReports.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-gray-400 mb-4">
                  <FileText className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? 'Отчеты не найдены' : 'Нет отчетов'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm 
                    ? 'Попробуйте изменить параметры поиска'
                    : 'Загрузите первый отчет, чтобы начать работу'
                  }
                </p>
                {!searchTerm && (
                  <Button onClick={() => setShowUploadModal(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Загрузить первый отчет
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            filteredReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getFileIcon(report.fileType)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {report.title}
                          </h3>
                          {report.description && (
                            <p className="text-gray-600 mb-2">{report.description}</p>
                          )}
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Файл: {report.file_name}</span>
                            <span>Размер: {formatFileSize(report.file_size)}</span>
                            <span>Автор: {report.uploader?.name || 'Unknown'}</span>
                            <span>Дата: {new Date(report.uploaded_at).toLocaleDateString('ru-RU')}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {user?.role === 'admin' && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDownloadReport(report)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Просмотр
                            </Button>
                          )}
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDownloadReport(report)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Скачать
                          </Button>
                          
                          {canDeleteReport(report) && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteReport(report.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {user?.role !== 'admin' && user?.id !== report.uploaded_by && (
                        <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-sm text-yellow-800">
                            <strong>Ограниченный доступ:</strong> Вы видите этот отчет, но не можете его просматривать или скачивать.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Upload Modal */}
      <UploadReportModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={handleUploadReport}
      />
    </>
  );
}