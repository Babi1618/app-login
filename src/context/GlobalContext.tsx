import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchData } from "../utils/api";
import mockUser from "../mock/mockUsers.json";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const hello = "ciao";
  const url = "http://localhost:3004/users";
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState<any>([]);

  const getUsers = useCallback(async (url: string) => {
    // console.log(mockUser);
    const res = await fetchData(url);
    setUsers([...mockUser.users, ...res]);
  }, []);

  useEffect(() => {
    getUsers(url);
  }, [getUsers]);
  useEffect(() => {
    console.log(users);
  }, [users]);
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
