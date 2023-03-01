import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { setLoggedUser, loggedUser, users } = useGlobalContext() as any;

  const handleClick = () => {
    const userLogged = users.reduce((acc: any, next: any) => {
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
    <div className="section login-section">
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
