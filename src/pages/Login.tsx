import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import mockUsers from "../mock/mockUsers.json";
import { LoggedOnlyPage } from "./LoggedsOnlyPage";
export const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const { setLoggedUser, loggedUser } = useGlobalContext() as any;

  const handleClick = () => {
    const { users } = mockUsers;
    console.log(users, name, pass);
    const userLogged = users.reduce((acc: any, next: any) => {
      console.log(acc, next);
      if (next.name === name && next.pass === pass) {
        acc = next;
      }
      return acc;
    }, null);
    if (userLogged) {
      setLoggedUser(userLogged);
    }
  };

  return (
    <div className=" section login-section">
      <div className="login-container">
        {!loggedUser && (
          <div className="login-content">
            <div className="section-title">Login</div>
            <div>
              <div>Name</div>

              <input onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <div>Password</div>

              <input onChange={(e) => setPass(e.target.value)} />
            </div>
            <button onClick={() => handleClick()}>Click</button>
          </div>
        )}
      </div>
      {loggedUser && <div className="login-content">Ok! you are logged</div>}
    </div>
  );
};
