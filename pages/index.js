import styles from '../styles/Home.module.css'
import Title from './components/title.js'
import Link from 'next/link'
import MainList from './components/mainList.js'

export default function Home() {
  return (
    <div className={styles.page}>
    <Title className></Title>
    <MainList></MainList> 
    </div>
  )
}
