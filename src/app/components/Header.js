import Styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.header}>
      <h1>Mon Portfolio</h1>
      <nav className={Styles.nav}>
        <Link href="/">Accueil</Link> | 
        <Link href="/about">À propos</Link> | 
        <Link href="/projects">Projets</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
