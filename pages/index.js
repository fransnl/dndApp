import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  
  

  return (
    <div>
      <Link
        key={data.name} 
        href={{
              pathname: '/spells',
          }}>
        <a>spells</a>
      </Link>
    </div>
  )
}