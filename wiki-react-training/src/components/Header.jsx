import logo from "./igem logo.png";
function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #e9f1fe, #b4bffe)",
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
          <li><a href="#" style={linkStyle}>Past Projects</a></li>

          <h1
            style={{
              margin: "0 60px",
              fontSize: "22px",
              fontWeight: "600",
              color: "#4c1d95"
            }}
          >
            <img src={logo} alt="logo" style={{ width: "300px", height: "80px" ,size: "30px"}} />
          </h1>

        
          <li><a href="#" style={linkStyle}>Contact</a></li>
          <li><a href="#" style={linkStyle}>FAQ</a></li>
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