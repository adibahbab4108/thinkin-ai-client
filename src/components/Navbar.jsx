import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className=" flex-1 text-left">
          <a className="btn btn-ghost text-xl">Thinkin AI</a>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link>All Images</Link></li>
            <li><Link to="/generate">Generate Images</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;