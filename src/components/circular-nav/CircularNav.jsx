import React from 'react'

import './CircularNav.css'

const CircularNav = ({ MainIcon, Data, Number }) => {
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
          {Data.map((code) => (
            <li style={{ '--i': code.var }}>
              <a href={code.ref_href} title={code.title}>
                <img src={code.img_code} alt=""></img>
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

export default CircularNav