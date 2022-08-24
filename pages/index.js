import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      <div className="button-list">
        <Link href={{pathname: '/spells'}}>
          <button className="hButton">spells</button>
        </Link>
      </div>
     
    </div>
  )
}
