import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export const Navbar = () => {
  const { loggedUser } = useGlobalContext() as any;
  return (
    <nav>
      <ul>
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
            ciao <span>{loggedUser.name}</span>
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
