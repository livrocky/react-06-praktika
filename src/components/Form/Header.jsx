function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">CONTACT US</h1>
      <p className="header-text">See Our Daily News & Updates</p>

      <div className="dark-mode">
        <label htmlFor="dark">Dark mode?</label>
        <input type="checkbox" id="dark" />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Header;
