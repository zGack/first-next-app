import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <> 
      <div className={styles.description}>
        <p>
          Cromatica -&nbsp;
          <code className={styles.code}>ABOUT</code>
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/" 
          className={styles.card}
        >
          <h2 className={inter.className}>
            Ir a Home<span>-&gt;</span>
          </h2>
        </Link>
        <Link
          href="/contact" 
          className={styles.card}
        >
          <h2 className={inter.className}>
            Ir a Contact<span>-&gt;</span>
          </h2>
        </Link>
        <Link
          href="/pricing" 
          className={styles.card}
        >
          <h2 className={inter.className}>
            Ir a Pricing<span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout> 
  )
}