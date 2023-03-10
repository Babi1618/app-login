import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import brand from "../assets/my_brand.png";

export const Navbar = () => {
  const { loggedUser } = useGlobalContext() as any;
  return (
    <nav>
      <ul>
        <li>
          <div id="brand-image">
            <img src={brand} alt="brand" />
          </div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/open">Open</Link>
        </li>
        {loggedUser && loggedUser.type === "admin" && (
          <li>
            <Link to="/admins">Admin</Link>
          </li>
        )}
        {loggedUser && (
          <li>
            <Link to="/logged">Only Logged</Link>
          </li>
        )}
      </ul>
      <ul>
        {loggedUser ? (
          <div>
            Ciao <span>{loggedUser.name}</span>
          </div>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
