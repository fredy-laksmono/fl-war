import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar-frame">
      <h1>FL-WAR</h1>
      <div className="nav-bar">
        {<Link to="/">Home</Link>}
        {<Link to="/howToPlay">How to play</Link>}
        {<Link to="/about">About</Link>}
      </div>
    </nav>
  );
};

export default Nav;
