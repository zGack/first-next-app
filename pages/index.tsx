import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>
          Cromatica -&nbsp;
          <code className={styles.code}>HOME</code>
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={179}
          height={36}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="12"
            width={39}
            height={30}
            priority
          />
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/about"
          className={styles.card}
        >
        
          <h1 className={inter.className}>
            Ir a About <span>-&gt;</span>
          </h1>
        </Link>
        <Link
          href="/contact"
          className={styles.card}
        >
        
          <h1 className={inter.className}>
            Ir a Contact <span>-&gt;</span>
          </h1>
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
