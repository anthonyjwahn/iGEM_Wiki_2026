function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card"
    
    style={{
        background: "linear-gradient(135deg, #e9f8fe, #c5e0ef)",
        padding: "25px",
        borderRadius: "16px",
        width: "260px",
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        fontFamily: "'Poppins', sans-serif",
        color: "#4b6f8d",
        transition: "0.3s",
        gridColumnStart: "span 1",

        flex: "0 0 240px"
        
      }}>
        
      <img
        src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/external-daifuku-japanese-food-tulpahn-outline-color-tulpahn.png"
        alt={title}
        className="project-image"
      />
      <h3>{title}</h3>
      <p>{description}</p>

     
 
    </div>
  )
}

export default ProjectCard