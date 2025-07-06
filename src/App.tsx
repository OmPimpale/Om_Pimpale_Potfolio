import { Toaster } from 'react-hot-toast'
import './App.css'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <LandingPage />
    </>
  )
}

export default App
