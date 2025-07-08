export async function getServerSideProps() {
  const projects = [
    { id: 1, title: "Projet A", description: "Description A" },
    { id: 2, title: "Projet B", description: "Description B" },
  ];
  return { props: { projects } };
}

export default function Projects({ projects }) {
  return (
    <div>
      <h2>Mes Projets</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}