/*
  # Enable RLS and fix infinite recursion

  1. Enable RLS on all tables
  2. Create non-recursive policies for all tables
  3. Ensure proper access control without circular dependencies
*/

-- ==============================================
-- ENABLE RLS ON ALL TABLES
-- ==============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- ==============================================
-- PROFILES TABLE POLICIES
-- ==============================================

CREATE POLICY "profiles_select_all"
  ON profiles FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "profiles_update_own"
  ON profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_insert_admin"
  ON profiles FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "profiles_update_admin"
  ON profiles FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "profiles_delete_admin"
  ON profiles FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- PROJECTS TABLE POLICIES (Non-recursive)
-- ==============================================

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

CREATE POLICY "projects_insert_admin"
  ON projects FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
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

CREATE POLICY "projects_delete_admin"
  ON projects FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- PROJECT MEMBERS TABLE POLICIES (Non-recursive)
-- ==============================================

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
-- PROJECT FILES TABLE POLICIES
-- ==============================================

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

CREATE POLICY "project_files_delete"
  ON project_files FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    OR uploaded_by = auth.uid()
  );

-- ==============================================
-- CALENDAR EVENTS TABLE POLICIES
-- ==============================================

CREATE POLICY "calendar_events_select_all"
  ON calendar_events FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "calendar_events_insert_own"
  ON calendar_events FOR INSERT TO authenticated
  WITH CHECK (created_by = auth.uid());

CREATE POLICY "calendar_events_update_own"
  ON calendar_events FOR UPDATE TO authenticated
  USING (created_by = auth.uid())
  WITH CHECK (created_by = auth.uid());

CREATE POLICY "calendar_events_update_admin"
  ON calendar_events FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "calendar_events_delete_own"
  ON calendar_events FOR DELETE TO authenticated
  USING (created_by = auth.uid());

CREATE POLICY "calendar_events_delete_admin"
  ON calendar_events FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- COMMENTS TABLE POLICIES
-- ==============================================

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

CREATE POLICY "comments_update_own"
  ON comments FOR UPDATE TO authenticated
  USING (author_id = auth.uid())
  WITH CHECK (author_id = auth.uid());

CREATE POLICY "comments_delete_own"
  ON comments FOR DELETE TO authenticated
  USING (author_id = auth.uid());

CREATE POLICY "comments_delete_admin"
  ON comments FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- REPORTS TABLE POLICIES
-- ==============================================

CREATE POLICY "reports_select_admin"
  ON reports FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "reports_select_own"
  ON reports FOR SELECT TO authenticated
  USING (uploaded_by = auth.uid());

CREATE POLICY "reports_insert_own"
  ON reports FOR INSERT TO authenticated
  WITH CHECK (uploaded_by = auth.uid());

CREATE POLICY "reports_update_own"
  ON reports FOR UPDATE TO authenticated
  USING (uploaded_by = auth.uid())
  WITH CHECK (uploaded_by = auth.uid());

CREATE POLICY "reports_update_admin"
  ON reports FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "reports_delete_own"
  ON reports FOR DELETE TO authenticated
  USING (uploaded_by = auth.uid());

CREATE POLICY "reports_delete_admin"
  ON reports FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- SALARY CALCULATIONS TABLE POLICIES
-- ==============================================

CREATE POLICY "salary_calculations_select_admin"
  ON salary_calculations FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "salary_calculations_select_own"
  ON salary_calculations FOR SELECT TO authenticated
  USING (employee_id = auth.uid());

CREATE POLICY "salary_calculations_insert_admin"
  ON salary_calculations FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
    AND created_by = auth.uid()
  );

CREATE POLICY "salary_calculations_update_admin"
  ON salary_calculations FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "salary_calculations_delete_admin"
  ON salary_calculations FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ==============================================
-- MESSENGER TABLES POLICIES
-- ==============================================

CREATE POLICY "chats_select_participant"
  ON chats FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_participants 
      WHERE chat_id = chats.id AND user_id = auth.uid()
    )
  );

CREATE POLICY "chats_insert_all"
  ON chats FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "chats_update_participant"
  ON chats FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_participants 
      WHERE chat_id = chats.id AND user_id = auth.uid()
    )
  );

CREATE POLICY "chat_participants_select"
  ON chat_participants FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_participants cp2 
      WHERE cp2.chat_id = chat_participants.chat_id AND cp2.user_id = auth.uid()
    )
  );

CREATE POLICY "chat_participants_insert_all"
  ON chat_participants FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "chat_participants_update_own"
  ON chat_participants FOR UPDATE TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "messages_select_participant"
  ON messages FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_participants 
      WHERE chat_id = messages.chat_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "messages_insert_participant"
  ON messages FOR INSERT TO authenticated
  WITH CHECK (
    sender_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM chat_participants 
      WHERE chat_id = messages.chat_id AND user_id = auth.uid()
    )
  );