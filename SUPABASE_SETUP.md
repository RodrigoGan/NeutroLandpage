# Configuração do Supabase na Landing Page

## ✅ Passos Completados
- [x] Cliente Supabase instalado
- [x] Arquivo de configuração criado (`src/lib/supabase.ts`)
- [x] Formulário atualizado para usar banco de dados
- [x] Feedback visual melhorado
- [x] Tabela `landing_leads` criada no Supabase

## 🔧 Configuração Necessária

### 1. Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-publica-aqui
```

### 2. Onde Encontrar as Credenciais
1. Acesse o dashboard do seu projeto Supabase
2. Vá em **Settings** > **API**
3. Copie:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public** key → `VITE_SUPABASE_ANON_KEY`

### 3. Configuração RLS (Row Level Security)
Execute este SQL no seu Supabase para permitir inserções na tabela:

```sql
-- Permitir inserções na tabela landing_leads
ALTER TABLE landing_leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserções de qualquer usuário
CREATE POLICY "Allow insert for landing leads" ON landing_leads
FOR INSERT WITH CHECK (true);

-- Política para permitir leitura (opcional, para debug)
CREATE POLICY "Allow read for landing leads" ON landing_leads
FOR SELECT USING (true);
```

## 🚀 Como Testar

1. Configure as variáveis de ambiente
2. Reinicie o servidor (`npm run dev`)
3. Acesse `http://localhost:8081`
4. Preencha e envie o formulário
5. Verifique no Supabase se os dados foram salvos

## 📊 Estrutura da Tabela

A tabela `landing_leads` já está criada com:
- `id` (UUID, chave primária)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `whatsapp` (VARCHAR)
- `user_type` (VARCHAR)
- `created_at` (TIMESTAMP)
- `source` (VARCHAR, padrão: 'landing_page')

## ✨ Melhorias Implementadas

- ✅ **UX Melhorada**: Não abre mais o cliente de email
- ✅ **Processo Fluido**: Dados salvos instantaneamente
- ✅ **Feedback Visual**: Mensagem de sucesso melhorada
- ✅ **Ícones Atualizados**: Database icon para indicar salvamento
- ✅ **Loading State**: Indicador de carregamento durante o envio

## 🔍 Próximos Passos (Opcionais)

1. **Validação de Email**: Verificar se email já existe
2. **Notificações**: Enviar email de confirmação automático
3. **Analytics**: Dashboard para visualizar leads
4. **Integração**: Conectar com ferramentas de marketing