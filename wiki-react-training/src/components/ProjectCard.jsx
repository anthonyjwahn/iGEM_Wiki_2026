function ProjectCard ({title, description, leads}) {
    return (
        <div className="pc">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{leads}</p>
        </div>
    );
}
export default ProjectCard;