import { AppRouter } from './providers/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/widgets/Header/Header'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app container py-4">
        <Header />
        <AppRouter />
      </div>
    </QueryClientProvider>
  )
}

export default App
