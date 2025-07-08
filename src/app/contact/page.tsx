'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <h2>Contact</h2>
        <form
          action="https://formspree.io/f/your_form_id" // remplace par ton vrai lien
          method="POST"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
            marginTop: '1rem'
          }}
        >
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre adresse email" required />
          <textarea name="message" placeholder="Votre message" rows={5} required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </main>
    </>
  );
}