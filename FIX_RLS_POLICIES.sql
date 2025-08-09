-- SQL para corrigir as políticas RLS da tabela landing_leads
-- Execute este SQL no Supabase SQL Editor

-- 1. Remover políticas existentes
DROP POLICY IF EXISTS "Allow insert for landing leads" ON landing_leads;
DROP POLICY IF EXISTS "Allow read for landing leads" ON landing_leads;
DROP POLICY IF EXISTS "Enable insert for landing_leads" ON landing_leads;
DROP POLICY IF EXISTS "Enable read for landing_leads" ON landing_leads;

-- 2. Desabilitar RLS temporariamente para testar
-- ALTER TABLE landing_leads DISABLE ROW LEVEL SECURITY;

-- OU (recomendado) - Criar políticas mais permissivas:

-- 3. Garantir que RLS está habilitado
ALTER TABLE landing_leads ENABLE ROW LEVEL SECURITY;

-- 4. Criar política permissiva para INSERT
CREATE POLICY "landing_leads_insert_policy" ON landing_leads
    FOR INSERT 
    WITH CHECK (true);

-- 5. Criar política permissiva para SELECT (para debug)
CREATE POLICY "landing_leads_select_policy" ON landing_leads
    FOR SELECT 
    USING (true);

-- 6. Verificar as políticas criadas
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'landing_leads';

-- 7. Testar inserção manual (substitua pelos dados reais)
-- INSERT INTO landing_leads (name, email, whatsapp, user_type, source) 
-- VALUES ('Teste', 'teste@email.com', '(11) 99999-9999', 'usuario-comum', 'landing_page');