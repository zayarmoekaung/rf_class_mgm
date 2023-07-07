import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/component/header'
import Top from '@/component/top'
export default function Home() {
  return (
    <main className={styles.main}>
     <Header></Header>
     <section id='top'>
      <Top></Top>
     </section>
     <section id='about'></section>
     <section id='lecture'></section>
     <section id='attendance'></section>
     <section id='assignment'></section>
    </main>
  )
}
