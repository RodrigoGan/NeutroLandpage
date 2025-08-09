import { createClient } from '@supabase/supabase-js'

// Configurações do Supabase
// IMPORTANTE: Credenciais temporárias para resolver o problema
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tfppoqqjmtfluzwwpuig.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcHBvcXFqbXRmbHV6d3dwdWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDg2MDcsImV4cCI6MjA2NTIyNDYwN30.BkIqGChr8Vt3XyJ0xk7-WaAXbcbz1EKWBNDblJfSJ_M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para a tabela landing_leads
export interface LandingLead {
  id?: string
  name: string
  email: string
  whatsapp: string
  user_type: string
  created_at?: string
  source?: string
}

// Função para inserir um novo lead
export const insertLandingLead = async (leadData: Omit<LandingLead, 'id' | 'created_at'>) => {
  try {
    console.log('Tentando inserir lead:', leadData)
    
    const { data, error } = await supabase
      .from('landing_leads')
      .insert([{
        ...leadData,
        source: 'landing_page'
      }])
      .select()

    console.log('Resposta do Supabase:', { data, error })

    if (error) {
      console.error('Erro ao inserir lead:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Erro na função insertLandingLead:', error)
    return { success: false, error }
  }
}