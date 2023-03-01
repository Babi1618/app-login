import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fetchData } from "../utils/api";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const hello = "ciao";
  const url = "http://localhost:3004/users";
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async (url: string) => {
    const res = await fetchData(url);
    setUsers(res);
  }, []);

  useEffect(() => {
    getUsers(url);
  }, [getUsers]);

  return (
    <GlobalContext.Provider
      value={{
        hello,
        loggedUser,
        setLoggedUser,
        users,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
