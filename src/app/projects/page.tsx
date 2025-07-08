'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <h2>Mes projets</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li><strong>Ya Bousso Style</strong> — Boutique de couture et broderie en ligne</li>
          <li><strong>Application To-Do</strong> — Gestion de tâches avec React</li>
          <li><strong>Portfolio</strong> — Ce site web pour présenter mes travaux</li>
        </ul>
      </main>
    </>
  );
}
