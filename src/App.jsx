import { useState } from 'react'
import Home from "./pages/home"
import Cadastro from "./pages/cadastro"
import Sidebar from "./components/Sidebar"

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'cadastro':
        return <Cadastro />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  )
}

export default App
