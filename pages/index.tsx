import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Montserrat({
    weight: '400',
    preload: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Hector</title>
        <meta name="description" content="Home by Hector" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
            <Image
              src="/Hectorlogo2.svg"
              alt="13"
              width={350}
              height={200}
              priority
            />
            <p className={inter.className}>Essentials for home and living</p>
        </div>
      </main>
    </>
  )
}
