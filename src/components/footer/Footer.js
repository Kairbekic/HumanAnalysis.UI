import "./style.css"

import vk from "./../../img/icons/vk.svg"
import telegram from "./../../img/icons/telegram.png"
import instagram from "./../../img/icons/instagram.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img
                  src={vk}
                  alt="Link"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://instagram.com/kairbekic">
                <img
                  src={instagram}
                  alt="Link"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/kairbekic">
                <img
                  src={telegram}
                  alt="Link"
                />
              </a>
            </li>
            {/* <li className="social__item">
              <a href="#!">
                <img
                  src={linkedIn}
                  alt="Link"
                />
              </a>
            </li> */}
            {/* <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li> */}
          </ul>
          <div className="copyright">
            <p>© 2023 Astana</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
