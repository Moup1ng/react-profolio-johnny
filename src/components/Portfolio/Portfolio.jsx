import Tilt from 'react-parallax-tilt';
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
            <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    <p>Project Title</p>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Portfolio