import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {formState, handleInputChange, handleResetForm } = useForm({
    username: "",
    email: "",
    password: ""
  })

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        value={username}
        onChange={handleInputChange}
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />
      <input
        value={email}
        onChange={handleInputChange}
        type="text"
        className="form-control mt-2"
        placeholder="jotta@google.com"
        name="email"
      />
      <input
        value={password}
        onChange={handleInputChange}
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
      />

      <button className="btn btn-primary mt-2" onClick={handleResetForm}>Reset Form</button>
      {username === "jotta" && <Message />}
    </>
  );
};
