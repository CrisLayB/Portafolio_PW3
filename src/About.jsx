import Contact from './components/Contact.jsx'
import SliderCarousel from './components/slider/SliderCarousel.jsx'
import Uvg from './data/uvg.js'

const About = () => {
  return (
    <div className="App">
      <div className="page-scroll">
        <section className="one-about">
          <div>
            <p>Hola! Soy Cristian Laynez</p>
            <h1>Ingeniero en Ciencias de la Computación</h1>
            <p>
              Soy de Guatemala, actualmente estoy en tercer año de Ingenieria en
              Ciencias de la Computación
            </p>
            <p>
              Aprendí a programar cuando tenía 15 años, mi primer lenguaje fue
              C#
            </p>
            <p>
              Desde ese día procuré empezar a aprender por mi cuenta, me
              concidero una persona autodidacta.
            </p>
            <p>
              Gracias a la educación universitaria he podido aprender más sobre
              la programación y otras habilidades
            </p>
            <p>
              como el diseño de aplicaciones, matemáticas y he competido en unas
              cuantas hackatoons y competencias.
            </p>
          </div>
        </section>
        <section className="two-about">
          <div>
            <h1>Me encanta poder aprender varios temas de computer science,</h1>
            <h1>Estoy abierto a aprender/adquirir cualquier tipo de</h1>
            <h1>conocimiento que pueda adquirir.</h1>
          </div>
        </section>
        <section className="three-about">
          <div>
            <h1 className="slide-right">Hobbies</h1>
            <ul>
              <li>Jugar Videojuegos</li>
              <li>Programar</li>
              <li>Escuchar Música (especialmente de los 80's y 90's)</li>
              <li>Mirar Anime</li>
              <li>Jugar Deportes</li>
            </ul>
          </div>
        </section>
        <section className="four-about">
          <div>
            <h1>Historial Académico</h1>
            <aside>
              <details>
                <summary>Colegio Adventista JUBA - [2016 - 2019]</summary>
                <p>El año 2016 a 2017 estudie 2do y 3ro básico.</p>
                <p>El año 2018 a 2019 estudié bachillerato en Computación.</p>
              </details>
              <br />
              <details>
                <summary>
                  Universidad del Valle de Guatemala - [2020 - 2024]
                </summary>
                <p>Algunas actividades realizadas por el momento en UVG:</p>
                {/* <SliderCarousel data={Uvg} /> */}
              </details>
            </aside>
          </div>
        </section>
        {/* <section className="five-about"></section> */}
        <section className="six-about">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default About
