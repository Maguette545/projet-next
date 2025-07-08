import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Contactez-moi</h1>
        <form
          action="https://formspree.io/f/your_form_id" 
          method="POST"
          className={styles.form}
        >
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Envoyer</button>
        </form>
      </main>
    </>
  );
}
