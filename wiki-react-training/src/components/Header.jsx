function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #ede9fe, #d8b4fe)",
        padding: "20px 220px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)"
      }}
    >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",   // spacing between items
            padding: 0,
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "900",
            fontSize: "16px",
            letterSpacing: "1px"
          }}
        >
          <li><a href="#" style={linkStyle}>What We Do</a></li>
          <li><a href="#" style={linkStyle}>Our Team</a></li>

          <h1
            style={{
              margin: "0 60px",
              fontSize: "22px",
              fontWeight: "600",
              color: "#4c1d95"
            }}
          >
            Cornell iGEM 2026
          </h1>

          <li><a href="#" style={linkStyle}>Project</a></li>
          <li><a href="#" style={linkStyle}>Contact</a></li>
        </ul>
    </header>
  )
}

const linkStyle = {
  textDecoration: "none",
  color: "#44207b",
  transition: "0.25s",
}

export default Header