import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>FL-WAR</h4>
      <div>
        {<Link to="/">Home</Link>}
        {<Link to="/howToPlay">How to play</Link>}
        {<Link to="/about">About</Link>}
      </div>
    </nav>
  );
};

export default Nav;
