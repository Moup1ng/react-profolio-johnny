/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin , FaFacebookF } from 'react-icons/fa6'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi, it's me</p>
                    <h3 className={styles.text_2}>John Doe</h3>
                    <p className={styles.text_3}>
                        <span style={{marginRight: '10px'}}>I'm a </span>
                        <TypeAnimation
                            sequence={[
                              'Front-end Develop',
                              1000,
                              'Web Developer',
                              1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                    <p className={styles.text_4}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaLinkedin  /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.hero_img}></div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Hero