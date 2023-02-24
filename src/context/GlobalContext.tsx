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

  const admin1 = {
    id: 1,
    name: "Gino",
    type: "admin",
    pass: "1",
  };

  const user1 = {
    id: 2,
    name: "Lillo",
    type: "user",
    pass: "2",
  };
  const [loggedUser, setLoggedUser] = useState<any>(null);

  return (
    <GlobalContext.Provider
      value={{
        hello,
        loggedUser,
        setLoggedUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
