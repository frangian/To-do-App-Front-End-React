import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { validarEmail, validarContrasenia } from '../../../validaciones';

const LoginContainer = () => {
  const url = "http://localhost:8080/api/v1/usuario/auth";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validarEmail(email) || !validarContrasenia(password)) {
      setErrorMessage('Verificar los datos ingresados');
      return;
    }

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(url + "/login", payload);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setErrorMessage('');
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 403) {
        setErrorMessage('Verifica tus credenciales');
      }
    }
  };

  return (
    <Login
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  );
};

export default LoginContainer;
