import styles from '../../styles/Card.module.css';

export default function Stats(){
    return(
        <div className={styles.card}>
            <p id={styles.about}>strength: 16 +3</p>
            <p id={styles.about}>dexterity: 15 +3</p>
            <p id={styles.about}>constitution: 16 +3 </p>
            <p id={styles.about}>intelligence: 11 +0</p>
            <p id={styles.about}>wisdom: 17 +3</p>
            <p id={styles.about}>charisma: 8 -1</p>
            

        </div>
    )
}
