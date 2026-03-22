function Footer({ teamName }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-text">
        <p className="footer-title">{teamName}</p>
        <p className="footer-copy">© {year} {teamName}. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <a href="https://igem.engineering.cornell.edu/" target="_blank" rel="noreferrer">
          iGEM
        </a>
      </div>
    </footer>
  );
}

export default Footer;
