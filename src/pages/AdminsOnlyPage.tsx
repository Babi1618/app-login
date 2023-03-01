import { useGlobalContext } from "../context/GlobalContext";

export const AdminsOnlyPage = () => {
  const { users } = useGlobalContext() as any;
  return (
    <div className="section">
      <div className="section-title">Admins Only</div>
      <div className="section-subtitle">Admins List</div>
      {users
        .filter((el: any) => {
          return el.type === "admin";
        })
        .map((e: any) => {
          return <div key={e.id}>{e.name}</div>;
        })}
      <div className="section-subtitle">Users List</div>
      {users
        .filter((el: any) => {
          return el.type === "user";
        })
        .map((e: any) => {
          return <div key={e.id}>{e.name}</div>;
        })}
    </div>
  );
};
