/*
  # Create reports storage bucket with simplified policies

  1. Storage Setup
    - Creates the 'reports' bucket for storing employee report files
    - Configures bucket as private (not public)
    - Sets up basic security policies

  2. Security Policies
    - Authenticated users can upload files
    - Authenticated users can view files
    - File owners can delete their files
*/

-- Create the reports bucket
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  VALUES (
    'reports',
    'reports',
    false,
    52428800,
    ARRAY['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'text/plain', 'application/pdf']
  )
  ON CONFLICT (id) DO UPDATE
  SET
    public = false,
    file_size_limit = 52428800,
    allowed_mime_types = ARRAY['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'text/plain', 'application/pdf'];
END $$;

-- Drop existing policies
DROP POLICY IF EXISTS "reports_upload_own" ON storage.objects;
DROP POLICY IF EXISTS "reports_select_admin" ON storage.objects;
DROP POLICY IF EXISTS "reports_select_own" ON storage.objects;
DROP POLICY IF EXISTS "reports_delete_admin" ON storage.objects;
DROP POLICY IF EXISTS "reports_delete_own" ON storage.objects;
DROP POLICY IF EXISTS "reports_update_own" ON storage.objects;
DROP POLICY IF EXISTS "reports_update_admin" ON storage.objects;

-- Allow authenticated users to upload to their folder
CREATE POLICY "Allow authenticated uploads to own folder"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow authenticated users to read from their folder or if they're admin
CREATE POLICY "Allow authenticated reads from own folder"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'reports'
    AND (
      (storage.foldername(name))[1] = auth.uid()::text
      OR auth.jwt()->>'role' = 'admin'
    )
  );

-- Allow users to delete their own files
CREATE POLICY "Allow delete own files"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow users to update their own files
CREATE POLICY "Allow update own files"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );