function Header({ links, logoSrc }) {
  return (
    <header className="site-header">
      <div className="header-text">
        <div className="header-brand">
          <img src={logoSrc} alt="Cornell iGEM logo" />
        </div>
      </div>
      <nav className="site-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
