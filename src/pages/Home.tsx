import { useGlobalContext } from "../context/GlobalContext";

export const Home = () => {
  const { hello } = useGlobalContext() as any;
  return <div>home {hello}</div>;
};
