import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Image 
        src={project.image}
        alt={project.title}
        width={300}
        height={180}
        className={styles.image}
      />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
        Voir le projet
      </a>
    </div>
  );
}