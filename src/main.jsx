import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import App from './App.jsx'
import { ToastProvider } from './components/ui.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'
import { isSupabaseConfigured } from './lib/supabase.js'
import './index.css'

function MissingConfig() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 text-center">
      <h1 className="text-2xl font-extrabold text-navy-900">Configuração pendente</h1>
      <p className="mt-2 text-muted">
        Defina <code>VITE_SUPABASE_URL</code> e <code>VITE_SUPABASE_ANON_KEY</code> (ou as variáveis <code>NEXT_PUBLIC_SUPABASE_*</code>) para conectar o banco de dados.
      </p>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isSupabaseConfigured ? (
      <BrowserRouter>
        <SWRConfig value={{ revalidateOnFocus: false, shouldRetryOnError: false }}>
          <ToastProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ToastProvider>
        </SWRConfig>
      </BrowserRouter>
    ) : <MissingConfig />}
  </StrictMode>,
)
