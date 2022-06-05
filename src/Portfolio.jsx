import { Link } from 'react-router-dom'

// Componentes
import Contact from './components/Contact.jsx'
import CardsOuter from './components/cardsOuter/CardsOuter.jsx'
import SliderCarousel from './components/slider/SliderCarousel.jsx'

// Imagenes
import ImgCodeWars from './img/img-code-wars1.png'
import ImgHackerRank from './img/img-hackerrank.png'

// Data
import Robotic from './data/robotic.js'

const Portfolio = () => {
  return (
    <div className="App">
      <br />
      <h1 className="blur-in-expand">Hola! Mi nombre es...</h1>
      <br />
      <br />
      <br />
      <div>
        <h1 className="name">Cristian Fernando Laynez Bachez</h1>
        <p className="sub-information">
          Ingeniero en Ciencias de la Computación
        </p>
        <p className="sub-information">Futuro Desarrollador de Videojuegos</p>
        {/* Insetar imagen mia jeje */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h1>Me presento.</h1> */}
      <p>Actualmente estoy estudiando Ingenieria en Ciencias de la</p>
      <p>Computación en la Universidad del Valle de Guatemala.</p>
      <p>Soy una persona con hambre de conocimiento y que busca</p>
      <p>superarse en las metas/objetivos que se propone.</p>
      {/* <button className="btn-about">Conoce más sobre mí</button> */}
      {/* <a href="#" className="btn-about"> */}
      <Link to={'/about'}>
        <div className="btn-about">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p className="text-about">Conoce más sobre mí</p>
          </a>
        </div>
      </Link>
      <br />
      <br />
      <br />
      <h1>Habilidades Principales</h1>
      <CardsOuter />
      <br />
      <br />
      <br />
      <h1>Desde pequeño siempre me ha gustado jugar videojuegos.</h1>
      <h1>
        Uno de mis grandes sueños y objetivos es crear videojuegos que tengo en
        mi mente.
      </h1>
      <h1>Por este sueño estoy estudiando Computer Science</h1>
      <br />
      <br />
      <br />
      <div>
        <h1>
          Actualmente estoy trabajando en mi proyecto personal 'Robotic
          Slaughter'
        </h1>
        <SliderCarousel data={Robotic} />
        <p>Videojuego todavía en desarrollo</p>
      </div>
      <br />
      <br />
      <br />
      <h1>Pero no solo me gustan los videojuegos.</h1>
      <h1>
        También escogí la carrera porque me encanta la computación y
        programación.
      </h1>
      <br />
      <br />
      <br />
      <h1>Cuando tengo la oportunidad y el tiempo realizo</h1>
      <h1>varios ejercicios y desafios de código en páginas como:</h1>
      <br />
      <br />
      {/* <ul>
    https://www.codewars.com/users/CL%20The%20Dreamer
    https://www.hackerrank.com/cristianlaynezb1
  </ul> */}
      <div className="flex-competitive-code">
        <div class="flex-item-left">
          <img
            className="img-competitive-code"
            src={ImgCodeWars}
            alt="codewars"
          />
        </div>
        <div class="flex-item-right">
          <img
            className="img-competitive-code"
            src={ImgHackerRank}
            alt="hackerrank"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1>Me encanta poder aprender varios temas de computer science,</h1>
      <h1>Estoy abierto a aprender/adquirir cualquier tipo de</h1>
      <h1>conocimiento que pueda adquirir.</h1>

      <br />
      <br />
      <br />
      <h1>Lenguajes de Programación</h1>
      {/* A la hora de dar click que haga una animacion chingona jeje que todos los circulos se muevan */}
      <ul>
        <li>C#</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>C++</li>
        <li>Java</li>
        <li>C</li>
        <li>Kotlin</li>
      </ul>
      <br />
      <br />
      <br />
      <h1>Herramientas y Frameworks</h1>
      {/* A la hora de dar click que haga una animacion chingona jeje que todos los circulos se muevan */}
      <ul>
        <li>Unity</li>
        <li>React</li>
        <li>PostgresSQL</li>
        <li>Android Studio</li>
        <li>Raspberry</li>
        <li>Linux</li>
        <li>Photoshop</li>
      </ul>
      <Contact />
    </div>
  )
}

export default Portfolio
