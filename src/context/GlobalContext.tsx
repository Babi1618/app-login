import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const hello = "ciao";
  const url = "http://localhost:3004/users";
  const [loggedUser, setLoggedUser] = useState<any>(null);

  const [users, setUsers] = useState([]);

  const fetchData = async (url: string) => {
    const res = await fetch(`${url}`).then((res) => res.json());
    return res;
  };
  const getUsers = async (url: string) => {
    const res = await fetchData(url);
    // console.log(res);
    setUsers(res)
  };

  useEffect(() => {
    getUsers(url);
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        hello,
        loggedUser,
        setLoggedUser,
        users
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
