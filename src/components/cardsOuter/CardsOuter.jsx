/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Cards Outer : Mostrar Cartas bonitas neon
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import './cardsOuter.css'

const CardsOuter = () => {
  return (
    <>
      <div className="card-outer">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="title-card">
                  Diseño y Desarrollo de Videojuegos
                </h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  {' '}
                  Unity y C# son mis herramientas principales. También diseño
                  las mecanicas del juego y lo que tratará este mismo.
                </p>
              </div>
            </div>
          </div>
          {/* Desarrollo Web */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="title-card">Desarrollo Web</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  {' '}
                  Puedo trabajar tanto con frontend (Html, Css y Javascript)
                  como backend (Node.js y Express) con React. Pero prefiero
                  estar al lado del backend si este lo requiere.
                </p>
              </div>
            </div>
          </div>
          {/* Desarrollo Móvil */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h3 className="title-card">Desarrollo Móvil</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  {' '}
                  Actualmente suelo usar Android Studio tanto con Kotlin como
                  con Android para crear aplicaciones nativas de android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsOuter
