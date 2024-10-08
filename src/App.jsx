import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <div class="container">
            <h1>Nombre de la Empresa</h1>
            <nav>
              <ul>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="about" class="section">
          <div class="container">
            <h2>Sobre Nosotros</h2>
            <p>Somos una empresa comprometida con la excelencia y la innovación. Nuestro objetivo es ofrecer soluciones efectivas para el crecimiento de nuestros clientes.</p>
          </div>
        </section>

        <section id="services" class="section">
          <div class="container">
            <h2>Servicios</h2>
            <ul>
              <li>Consultoría estratégica</li>
              <li>Desarrollo de software</li>
              <li>Marketing digital</li>
            </ul>
          </div>
        </section>

        <section id="contact" class="section">
          <div class="container">
            <h2>Contacto</h2>
            <p>Email: contacto@empresa.com</p>
            <p>Teléfono: +123 456 7890</p>
          </div>
        </section>

        <footer>
          <div class="container">
            <p>&copy; 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </>
  )
}

export default App
