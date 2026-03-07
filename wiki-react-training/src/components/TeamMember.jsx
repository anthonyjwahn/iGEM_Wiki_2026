function TeamMember({ name, role, year, bio, image }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ede9fe, #fbcfe8)",
        padding: "25px",
        borderRadius: "16px",
        width: "260px",
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        fontFamily: "'Poppins', sans-serif",
        color: "#4c1d95",
        transition: "0.3s",
        gridColumnStart: "span 1",

        flex: "0 0 240px"
        
      }}
    >


       
        <img
 src="https://img.icons8.com/plasticine/100/kawaii-sushi.png"  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px"
  }}
/>

      <h3 style={{ marginBottom: "8px" }}>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Year:</strong> {year}</p>
      <p style={{ fontSize: "14px", marginTop: "10px" }}>{bio}</p>

      
    </div>
  )
}


export default TeamMember;