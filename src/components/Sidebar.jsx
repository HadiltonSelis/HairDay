import { useState } from 'react'
import './Sidebar.css'
import { RxScissors } from "react-icons/rx";
import { IoCalendarOutline, IoPersonOutline, IoPeopleOutline } from "react-icons/io5";

export default function Sidebar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigate = (page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <>
      
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-sidebar">HairDay<span><RxScissors/></span></div>
          <button className="close-btn" onClick={toggleSidebar}>✕</button>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigate('home')}
          >
            <span className="nav-icon"><IoCalendarOutline /></span>
            <span className="nav-text">Agendamentos</span>
          </button>

          <button 
            className={`nav-item ${currentPage === 'cadastro' ? 'active' : ''}`}
            onClick={() => handleNavigate('cadastro')}
          >
            <span className="nav-icon"><IoPeopleOutline /></span>
            <span className="nav-text">Cadastro de Clientes</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <span className="user-icon"><IoPersonOutline /></span>
            <div className="user-details">
              <span className="user-name">Admin</span>
              <span className="user-role">Administrador</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
