import styles from '../../styles/List.module.css';
import Link from 'next/link'

export default function MainList(){
    return(
       <div className={styles.list}>
        <Link href={{pathname: '/spells'}}>
          <button className={styles.hButton}>spells</button>
        </Link>
        <Link href={{pathname: '/classes'}}>
          <button className={styles.hButton}>classes</button>
        </Link>
      </div>
        
    )
}
