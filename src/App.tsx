import { HelmetProvider } from 'react-helmet-async'
import { AppRouter } from './router'

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  )
}

export default App
