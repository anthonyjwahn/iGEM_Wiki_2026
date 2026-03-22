function TeamMember({ name, role, year, bio, imageUrl }) {
  return (
    <article className="team-card">
      <div className="team-card__header">
        <h3 className="team-card__name">{name}</h3>
        <span className="team-card__year">Class of {year}</span>
      </div>
      <p className="team-card__role">{role}</p>
      <p className="team-card__bio">{bio}</p>
    </article>
  );
}

export default TeamMember;
