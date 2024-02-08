import { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'

function Navbar() {
  const [isToggled, setToggle] = useState(false);

  function haddleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
        <div className={styles.container}>
            <div className={styles.nav_con}>
                <div className={styles.logo}>
                    <a href="#">Johnny PORT</a>
                </div>
                <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.button}>
                    <a href="#">Hire Me</a>
                </div>
            </div>

            <FaBars className={styles.bars} onClick={haddleToggle} />
            {isToggled ? (
                <>
                  <ul className={styles.mobile_menu}>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                  <div className={styles.mobile_button}>
                    <a href="#">Hire Me</a>
                  </div>
                </>
            ) : null }
        </div>
    </nav>
  )
}

export default Navbar