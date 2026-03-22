function ProjectCard({ title, description, leads, imageUrl, badge }) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {badge ? <span className="project-card__badge">{badge}</span> : null}
      </div>
      {imageUrl ? (
        <div className="project-card__media">
          <img src={imageUrl} alt={`${title} logo`} />
        </div>
      ) : null}
      <p className="project-card__description">{description}</p>
      {leads && leads.length > 0 ? (
        <div className="project-card__leads">
          <span className="project-card__label">Leads</span>
          <ul className="project-card__list">
            {leads.map((lead) => (
              <li key={lead}>{lead}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;
