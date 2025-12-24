import { useState } from 'react'
import './cadastro.css'
import { RxScissors } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FiEdit2 } from "react-icons/fi";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do cliente:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (field) => {
    const input = document.querySelector(`input[name="${field}"]`)
    if (input) {
      input.focus()
      input.select()
    }
  }

  return (
    <div className="layout-cadastro">
      <aside className="card-cadastro">
        <div className="logo">HairDay<span><RxScissors /></span></div>

        <h1>Cadastro de Cliente</h1>
        <p className="subtitle">
          Preencha os dados abaixo para cadastrar um novo cliente
        </p>

        <form onSubmit={handleSubmit}>
          <label>Nome Completo</label>
          <div className="input">
            <span className="icon"><IoPersonOutline/></span>
            <input 
              type="text" 
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome completo"
              required
            />
          </div>

          <label>E-mail</label>
          <div className="input">
            <span className="icon"><MdOutlineMailOutline /></span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@email.com"
              required
            />
          </div>

          <label>Telefone</label>
          <div className="input">
            <span className="icon"><MdOutlinePhoneIphone /></span>
            <input 
              type="tel" 
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <label>Data de Nascimento</label>
          <div className="input">
            <span className="icon"><LiaBirthdayCakeSolid /></span>
            <input 
              type="date" 
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary">CADASTRAR CLIENTE</button>
        </form>
      </aside>

      <main className="preview-cadastro">
        <h2>Preview dos dados</h2>
        
        <div className="preview-card">
          <div className="preview-item">
            <span className="preview-label">Nome:</span>
            <span className="preview-value">{formData.nome || '-'}</span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit('nome')}
              title="Editar nome"
              type="button"
            >
              <FiEdit2 />
            </button>
          </div>
          
          <div className="preview-item">
            <span className="preview-label">E-mail:</span>
            <span className="preview-value">{formData.email || '-'}</span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit('email')}
              title="Editar e-mail"
              type="button"
            >
              <FiEdit2 />
            </button>
          </div>
          
          <div className="preview-item">
            <span className="preview-label">Telefone:</span>
            <span className="preview-value">{formData.telefone || '-'}</span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit('telefone')}
              title="Editar telefone"
              type="button"
            >
              <FiEdit2 />
            </button>
          </div>
          
          <div className="preview-item">
            <span className="preview-label">Data de Nascimento:</span>
            <span className="preview-value">
              {formData.dataNascimento ? new Date(formData.dataNascimento + 'T00:00:00').toLocaleDateString('pt-BR') : '-'}
            </span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit('dataNascimento')}
              title="Editar data de nascimento"
              type="button"
            >
              <FiEdit2 />
            </button>
          </div>
        </div>

        <div className="info-box">
          <h3>📋 Informações</h3>
          <p>Os dados preenchidos no formulário aparecerão aqui em tempo real.</p>
          <p>Após cadastrar, o cliente estará disponível para agendamentos.</p>
        </div>
      </main>
    </div>
  )
}
