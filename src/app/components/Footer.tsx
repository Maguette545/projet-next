import Styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>&copy; {new Date().getFullYear()} Maguette Thiao. Tous droits réservés.</p>
    </footer>
  );
}
