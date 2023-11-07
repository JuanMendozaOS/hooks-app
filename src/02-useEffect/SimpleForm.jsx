import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("formStatechanged");
  }, [formState]);

  useEffect(() => {
    // console.log("email Changed");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
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

      {username === "jotta" && <Message />}
    </>
  );
};
