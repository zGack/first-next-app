import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>
          Cromatica -&nbsp;
          <code className={styles.code}>CONTACT</code>
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
          href="/about" 
          className={styles.card}
        >
          <h2 className={inter.className}>
            Ir a About<span>-&gt;</span>
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
    </MainLayout>
  )
}
