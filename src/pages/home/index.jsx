import { useState } from 'react'
import './home.css'
import { RxScissors } from "react-icons/rx";
import { IoCalendarOutline, IoPersonOutline, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { PiCoffee } from "react-icons/pi";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState('20:00')

  return (
    <div className="layout">
      <aside className="card">
        <div className="logo">HairDay<span><RxScissors /></span></div>

        <h1>Agende um atendimento</h1>
        <p className="subtitle">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>

        <label>Data</label>
        <div className="input">
          <span className="icon"><IoCalendarOutline /></span>
          <input type="text" defaultValue="10/01/2024" />
        </div>

        <label>Horários</label>

        <div className="group">
          <span className="group-title">Manhã</span>
          <div className="times">
            <button className="time">09:00</button>
            <button className="time">10:00</button>
            <button className="time disabled">11:00</button>
            <button className="time">12:00</button>
          </div>
        </div>

        <div className="group">
          <span className="group-title">Tarde</span>
          <div className="times">
            <button className="time disabled">13:00</button>
            <button className="time disabled">14:00</button>
            <button className="time">15:00</button>
            <button className="time disabled">16:00</button>
            <button className="time">17:00</button>
            <button className="time">18:00</button>
          </div>
        </div>

        <div className="group">
          <span className="group-title">Noite</span>
          <div className="times">
            {['19:00','20:00','21:00'].map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`time ${selectedTime === t ? 'active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <label>Cliente</label>
        <div className="input">
          <span className="icon"><IoPersonOutline /></span>
          <input type="text" defaultValue="Tomas Marques" />
        </div>

        <button className="primary">AGENDAR</button>
      </aside>

      <main className="agenda">
        <header>
          <h2>Sua agenda</h2>
          <div className="input small">
            <span className="icon"><IoCalendarOutline /></span>
            <input type="text" defaultValue="10/01/2024" />
          </div>
        </header>

        <section className="block">
          <div className="block-title"><IoSunnyOutline /> Manhã <span>09h-12h</span></div>
          <div className="item">11:00 <strong>Lucas Silva</strong><button>🗑</button></div>
        </section>

        <section className="block">
          <div className="block-title"><PiCoffee /> Tarde <span>13h-18h</span></div>
          <div className="item">13:00 <strong>Lionel Scaloni</strong><button>🗑</button></div>
          <div className="item">14:00 <strong>Rogerio Ceni</strong><button>🗑</button></div>
          <div className="item">16:00 <strong>Everton Ribeiro</strong><button>🗑</button></div>
          <div className="item">17:00 <strong>Ronaldo Nazário</strong><button>🗑</button></div>
        </section>

        <section className="block">
          <div className="block-title"><IoMoonOutline /> Noite <span>19h-21h</span></div>
          <div className="item">21:00 <strong>Ronaldo Assis</strong><button>🗑</button></div>
        </section>
      </main>
    </div>
  )
}
