/*
  # Fix RLS infinite recursion and create storage bucket

  1. Changes
    - Drop existing RLS policies causing infinite recursion
    - Create new non-recursive policies for projects and project_members
    - Create storage bucket for reports with proper security policies

  2. Security
    - Maintains proper access control without circular dependencies
    - Ensures reports storage is properly secured
*/

-- ==============================================
-- FIX PROJECTS TABLE RLS (Remove recursion)
-- ==============================================

-- Drop existing policies
DROP POLICY IF EXISTS "projects_select_involved" ON projects;
DROP POLICY IF EXISTS "projects_update_admin_manager" ON projects;

-- Create new non-recursive policies
CREATE POLICY "projects_select_admin"
  ON projects FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "projects_select_manager"
  ON projects FOR SELECT TO authenticated
  USING (manager_id = auth.uid());

CREATE POLICY "projects_select_member"
  ON projects FOR SELECT TO authenticated
  USING (
    id IN (
      SELECT project_id FROM project_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "projects_update_admin"
  ON projects FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "projects_update_manager"
  ON projects FOR UPDATE TO authenticated
  USING (manager_id = auth.uid())
  WITH CHECK (manager_id = auth.uid());

-- ==============================================
-- FIX PROJECT MEMBERS TABLE RLS (Remove recursion)
-- ==============================================

-- Drop existing policies
DROP POLICY IF EXISTS "project_members_select" ON project_members;
DROP POLICY IF EXISTS "project_members_insert_admin_manager" ON project_members;
DROP POLICY IF EXISTS "project_members_update_admin_manager" ON project_members;
DROP POLICY IF EXISTS "project_members_delete_admin_manager" ON project_members;

-- Create new non-recursive policies
CREATE POLICY "project_members_select_admin"
  ON project_members FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_members_select_manager"
  ON project_members FOR SELECT TO authenticated
  USING (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "project_members_select_own"
  ON project_members FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "project_members_insert_admin"
  ON project_members FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_members_insert_manager"
  ON project_members FOR INSERT TO authenticated
  WITH CHECK (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "project_members_update_admin"
  ON project_members FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_members_update_manager"
  ON project_members FOR UPDATE TO authenticated
  USING (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "project_members_delete_admin"
  ON project_members FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_members_delete_manager"
  ON project_members FOR DELETE TO authenticated
  USING (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

-- ==============================================
-- FIX PROJECT FILES TABLE RLS (Remove recursion)
-- ==============================================

DROP POLICY IF EXISTS "project_files_select" ON project_files;
DROP POLICY IF EXISTS "project_files_insert" ON project_files;

CREATE POLICY "project_files_select_admin"
  ON project_files FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_files_select_manager"
  ON project_files FOR SELECT TO authenticated
  USING (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "project_files_select_member"
  ON project_files FOR SELECT TO authenticated
  USING (
    project_id IN (
      SELECT project_id FROM project_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "project_files_insert_admin"
  ON project_files FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "project_files_insert_manager"
  ON project_files FOR INSERT TO authenticated
  WITH CHECK (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "project_files_insert_member"
  ON project_files FOR INSERT TO authenticated
  WITH CHECK (
    project_id IN (
      SELECT project_id FROM project_members WHERE user_id = auth.uid()
    )
  );

-- ==============================================
-- FIX COMMENTS TABLE RLS (Remove recursion)
-- ==============================================

DROP POLICY IF EXISTS "comments_select" ON comments;
DROP POLICY IF EXISTS "comments_insert" ON comments;

CREATE POLICY "comments_select_admin"
  ON comments FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "comments_select_manager"
  ON comments FOR SELECT TO authenticated
  USING (
    project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "comments_select_member"
  ON comments FOR SELECT TO authenticated
  USING (
    project_id IN (
      SELECT project_id FROM project_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "comments_insert_admin"
  ON comments FOR INSERT TO authenticated
  WITH CHECK (
    author_id = auth.uid()
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "comments_insert_manager"
  ON comments FOR INSERT TO authenticated
  WITH CHECK (
    author_id = auth.uid()
    AND project_id IN (
      SELECT id FROM projects WHERE manager_id = auth.uid()
    )
  );

CREATE POLICY "comments_insert_member"
  ON comments FOR INSERT TO authenticated
  WITH CHECK (
    author_id = auth.uid()
    AND project_id IN (
      SELECT project_id FROM project_members WHERE user_id = auth.uid()
    )
  );

-- ==============================================
-- CREATE STORAGE BUCKET FOR REPORTS
-- ==============================================

INSERT INTO storage.buckets (id, name, public)
VALUES ('reports', 'reports', false)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for reports bucket
CREATE POLICY "reports_upload_own"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "reports_select_admin"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'reports'
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "reports_select_own"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "reports_delete_admin"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'reports'
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "reports_delete_own"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'reports'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );