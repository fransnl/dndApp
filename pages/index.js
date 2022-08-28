import styles from '../styles/Home.module.css'
import Title from './components/title.js'
import MainList from './components/mainList.js'
import Stats from './components/stats.js'

export default function Home() {
  return (
    <div className={styles.page}>
    <Title></Title>
    <Stats></Stats>
    <MainList></MainList>
    </div>
  )
}
