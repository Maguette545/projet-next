import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Mon Portfolio</h1>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
        <a href="/projects">Projets</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
