/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Circular Nav : Mostrar imagenes por medio de un nav de circulos
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import React from 'react'

import './CircularNav.css'

export const CircularNav = ({ MainIcon, Data, Number }) => {
  React.useEffect(() => {
    const getElements = () => {
      let toggle = document.querySelector('.toggle' + Number)
      let menu = document.querySelector('.menu' + Number)
      toggle.onclick = () => {
        menu.classList.toggle('active' + Number)
      }
    }
    getElements()
  })

  return (
    <>
      <div className="circular-nav">
        <div className={'menu' + Number}>
          <div className={'toggle' + Number}>
            <img className="img-code" src={MainIcon} alt="main_icon" />
          </div>
          {Data.map((code, index) => (
            <li key={index} style={{ '--i': code.var }}>
              <a
                className="btn-circle-neon"
                href={code.ref_href}
                target="_blank"
                title={code.title}
                rel="noreferrer"
              >
                <img src={code.img_code} alt=""></img>
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}
