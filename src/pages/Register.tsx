import { useForm } from "react-hook-form";

export const Register = () => {
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
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="section login-section">
      <div className="login-container">
        <div className="login-content">
          <div className="section-title">Register</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>Name</div>
              <input {...register("name")} />
            </div>
            <div>
              <div>Password</div>
              <input {...register("pass", { required: true })} />
            </div>
            {errors.exampleRequired && <div>This field is required</div>}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
