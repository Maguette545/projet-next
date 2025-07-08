import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Site E-commerce Ya Bousso Style',
    description: 'Un site de vente de vêtements africains avec panier d’achat.',
    image: '/images/projet1.png',
    link: 'https://votre-site-bousso.vercel.app',
  },
  {
    title: 'Portfolio Développeuse',
    description: 'Mon propre site de présentation avec Next.js, responsive et déployé.',
    image: '/images/projet2.png',
    link: '#',
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Mes Projets</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}