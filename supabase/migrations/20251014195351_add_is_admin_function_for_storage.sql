/*
  # Add helper function for storage policies

  1. New Function
    - `is_admin()` - checks if current user is admin
    - Used by storage policies to determine admin access

  2. Security
    - Function is SECURITY DEFINER to access profiles table
    - Only checks current authenticated user
*/

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;

-- Drop and recreate storage policies with admin check
DROP POLICY IF EXISTS "Allow authenticated reads from own folder" ON storage.objects;

CREATE POLICY "Allow authenticated reads from own folder"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'reports'
    AND (
      (storage.foldername(name))[1] = auth.uid()::text
      OR is_admin()
    )
  );

-- Also allow admin to delete any report
DROP POLICY IF EXISTS "Allow delete own files" ON storage.objects;

CREATE POLICY "Allow delete own files"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'reports'
    AND (
      (storage.foldername(name))[1] = auth.uid()::text
      OR is_admin()
    )
  );

-- Allow admin to update any report
DROP POLICY IF EXISTS "Allow update own files" ON storage.objects;

CREATE POLICY "Allow update own files"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'reports'
    AND (
      (storage.foldername(name))[1] = auth.uid()::text
      OR is_admin()
    )
  );