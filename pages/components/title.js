import styles from '../../styles/Title.module.css';
import cstyles from '../../styles/Card.module.css'

export default function Title(){
    return(
        <div className={cstyles.card}>
        <div className={styles.name}>
            <h1 >Osbourne Greenbottle</h1>
            <div className={styles.box}></div>
        </div>
        
            <p id={styles.about}>Class: Cleric</p>
            <p id={styles.about}>Lvl: 2</p>
            <p id={styles.about}>Race: Halfling</p>
        </div>
    )
}
