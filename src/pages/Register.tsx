import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/GlobalContext";

export const Register = () => {
  const [open, setOpen] = useState(true);
  const { setLoggedUser } = useGlobalContext() as any;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const obj = {
      ...data,
      type: "user",
    };
    console.log(obj);
    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpen(false);
        setLoggedUser(obj);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="section login-section">
      <div className="login-container">
        <div className="login-content">
          <div className="section-title">Register</div>
          {open ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>Name</div>
                <input {...register("username", { required: true })} />
              </div>
              <div>
                <div>Password</div>
                <input {...register("password", { required: true })} />
              </div>
              {errors.exampleRequired && <div>This field is required</div>}
              <input type="submit" />
            </form>
          ) : (
            <div>Registrazione avvenuta con successo </div>
          )}
        </div>
      </div>
    </div>
  );
};
