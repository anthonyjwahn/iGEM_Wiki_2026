export default function Contact() {
  return (
    <div className="contact-page" style={{ padding: "40px", fontFamily: "'Poppins', sans-serif", color: "#4b6f8d" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>Contact Us</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        We would love to hear from you! Whether you have questions about our projects, want to get involved, or just want to say hi, feel free to reach out.
      </p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        <div>
          <strong>Email:</strong> <a href="mailto:igem.cornell@gmail.com">igem.cornell@gmail.com</a>
        </div>
      </div>
    </div>
  );
}