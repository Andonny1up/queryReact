import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60 * 1000, // 60 segundos
      gcTime: 5 * 60 * 1000, // 5 minutos
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>,
)
