import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import profil from '../public/images/profil.jpg';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.text}>
            <h1>Bonjour, je suis Maguette Thiao</h1>
            <p>Développeuse web passionnée, spécialisée en React, Next.js et design web.</p>
            <Link href="/projects" className={styles.button}>Voir mes projets</Link>
          </div>
          <div>
            <Image 
              src={profil}
              alt="Photo de profil"
              width={200}
              height={200}
              className={styles.image}
            />
          </div>
        </section>
      </main>
    </>
  );
}