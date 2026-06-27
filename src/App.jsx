import './App.css'

const phoneNumber = '523334863144'
const displayPhone = '33 3486 3144'
const whatsappMessage = encodeURIComponent('Hola, Ruma Café. Me gustaría consultar disponibilidad o hacer un pedido.')
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
const mapsUrl = 'https://www.google.com/maps/place/Ruma+Caf%C3%A9/data=!4m7!3m6!1s0x8428afac385abc01:0x78d881016f2f8b1c!8m2!3d20.6829278!4d-103.3504385!16s%2Fg%2F11k42sh41r!19sChIJAbxaOKyvKIQRHIsvbwGB2Hg?authuser=0&hl=es-419&rclk=1'

const highlights = [
  { title: 'Chilaquiles divorciados', description: 'Un favorito de brunch para comenzar el día con sabor tapatío y café recién preparado.' },
  { title: 'Sándwich verde', description: 'La opción consentida para una pausa rica, práctica y muy de casa en el Centro.' },
  { title: 'Café y bebidas de temporada', description: 'Calientes o heladas, ideales para acompañar una mañana tranquila o una reunión casual.' },
]

const reviews = [
  'Muy rico todo, excelente servicio y ambiente familiar.',
  'Excelente lugar para desayunar; lo que más me gusta es el sándwich verde.',
  'Comida deliciosa, café en su punto y excelente atención.',
]

function App() {
  return (
    <main>
      <header className="hero" id="inicio">
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Inicio Ruma Café">
            <img src="/logo.png" alt="Ruma Café" />
            <span>Ruma Café</span>
          </a>
          <div className="nav-links">
            <a href="#menu">Menú</a>
            <a href="#galeria">Galería</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>

        <section className="hero-content section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Restaurante de brunch en Centro Guadalajara</p>
            <h1>Desayunos, café y un ambiente cálido para disfrutar sin prisa.</h1>
            <p className="hero-text">
              Ruma Café te espera en la Zona Centro con platillos reconfortantes, bebidas preparadas al momento y atención cercana para desayunar, reunirte o pedir para llevar.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar o pedir por WhatsApp</a>
              <a className="btn secondary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
            </div>
            <div className="trust-row" aria-label="Indicadores de confianza">
              <span>⭐ 4.8 en Google</span>
              <span>165 opiniones</span>
              <span>$100–200 por persona</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="/hero.jpg" alt="Platillos y café de Ruma Café" />
            <div className="hero-badge">Brunch · Café · Para llevar</div>
          </div>
        </section>
      </header>

      <section className="section menu" id="menu">
        <div className="section-heading">
          <p className="eyebrow">Favoritos de la casa</p>
          <h2>Opciones para desayunar rico en el Centro</h2>
          <p>Una selección comercial basada en los platillos destacados y reseñas; el menú final puede editarse fácilmente.</p>
        </div>
        <div className="cards">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <span className="card-icon">☕</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="galeria">
        <div className="section-heading compact">
          <p className="eyebrow">Ambiente Ruma</p>
          <h2>Un lugar cómodo, cálido y fotogénico</h2>
        </div>
        <div className="gallery">
          <img src="/galeria1.jpg" alt="Ambiente acogedor de Ruma Café" />
          <img src="/galeria2.jpg" alt="Café y bebidas de Ruma Café" />
          <img src="/galeria3.jpg" alt="Brunch y platillos destacados de Ruma Café" />
        </div>
      </section>

      <section className="section story section-grid">
        <div>
          <p className="eyebrow">Nuestra esencia</p>
          <h2>Un café para hacer pausa mientras recorres Guadalajara.</h2>
        </div>
        <p>
          En Ruma Café buscamos que cada visita se sienta sencilla y especial: comida rica, café bien preparado, servicio atento y un espacio relajado para empezar el día con energía o compartir una mesa en el Centro Histórico.
        </p>
      </section>

      <section className="section reviews">
        <div className="section-heading">
          <p className="eyebrow">Confianza local</p>
          <h2>Clientes que vuelven por el sabor y la atención</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote key={review}>
              <span>★★★★★</span>
              <p>“{review}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section location" id="ubicacion">
        <div className="location-card">
          <p className="eyebrow">Visítanos</p>
          <h2>C. Jesús González Ortega 411, Zona Centro, Guadalajara, Jal.</h2>
          <p>Horario reportado: abierto hasta las 3:30 p.m. Confirma disponibilidad, pedidos o tiempos de espera por WhatsApp.</p>
          <div className="location-actions">
            <a className="btn primary" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar</a>
            <a className="btn secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Enviar mensaje</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">¿Listo para desayunar?</p>
        <h2>Escríbenos y prepara tu visita a Ruma Café.</h2>
        <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp {displayPhone}</a>
      </section>

      <footer>
        <p>© 2026 Ruma Café · cafeterías Centro Guadalajara</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Ruma Café por WhatsApp">
        WhatsApp
      </a>
    </main>
  )
}

export default App
