const Header = () => {
    
  return (
    <>
      <div className="hDiv">
        <img
          className="icon logo"
          src="public/programmer.png"
          alt="icon-image"
        />
        <button id="hBtn" type="submit">SEARCH</button>
      </div>
      <nav>
        <ul className="ul">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
