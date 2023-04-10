export const CardUser = ({ user }) => {
  return (
    <div>
      <h2>{user.id}</h2>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.couse_module}</h2>
      <p>{user.bio}</p>
      <span>{user.contact}</span>

      <ul>
        {user.techs.map((tech) => {
          return (
            <li key={tech.id}>
              <span>{tech.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
