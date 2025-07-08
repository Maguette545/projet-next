import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Bienvenue sur mon portfolio</h2>
        <Image
          src="/images/img1.jpeg"
          alt="Photo de profil"
          width={200}
          height={200}
          style={{ borderRadius: '50%', margin: '1rem 0' }}
        />
        <p>Je suis Maguette Thiao, développeuse web spécialisée en React & Next.js.</p>
      </main>
    </>
  );
}
