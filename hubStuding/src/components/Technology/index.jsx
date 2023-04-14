export const CardTech = ({ tech }) => {
  return (
    <div>
      <h2>{tech.id}</h2>
      <h2>{tech.title}</h2>
      <h2>{tech.status}</h2>

      <ul>
        {tech.techs.map((tech) => (
          <li key={tech.id}>
            <span>{tech.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
