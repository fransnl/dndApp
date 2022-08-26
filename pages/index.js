import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/Image'



export default function Home() {
  return (
    <div>
      <div className="button-list">
        <Link href={{pathname: '/spells'}}>
          <button className="hButton">spells</button>
        </Link>
        <Link href={{pathname: '/classes'}}>
          <button className="hButton">classes</button>
        </Link>
      </div>
     
    </div>
  )
}
