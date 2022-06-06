/**
 * GMAIL:
 * <a target="_blank" href="https://icons8.com/icon/38158/gmail-logo">Gmail logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 *
 * GITHUB:
 * <a target="_blank" href="https://icons8.com/icon/12598/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 *
 * LINKEDIN:
 * <a target="_blank" href="https://icons8.com/icon/IuI5Yd3J3qcC/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 */

import IconGmail from '../icons/icons8-gmail-logo-150.png'
import IconGithub from '../icons/icons8-github-150.png'
import IconLinkedin from '../icons/icons8-linkedin-128.png'

const Contact = () => {
  return (
    <div>
      <h1>Contactame</h1>
      <br></br>
      <ul>
        <a target="_blank" href="https://icons8.com/icon/38158/gmail-logo">
          <img src={IconGmail} alt="gmail"></img>
        </a>
        <a target="_blank" href="https://icons8.com/icon/12598/github">
          <img src={IconGithub} alt="gmail"></img>
        </a>
        <a target="_blank" href="https://icons8.com/icon/IuI5Yd3J3qcC/linkedin">
          <img src={IconLinkedin} alt="gmail"></img>
        </a>
      </ul>
    </div>
  )
}

export default Contact
