import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import {
  validarTexto,
  validarEmail,
  validarContrasenia,
  compararContrasenias,
} from "../../../validaciones";
import Register from "./Register";

const RegisterContainer = () => {
  const url = "http://localhost:8080/api/v1/usuario/auth";

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(false)
    setSuccessMessage(false);

    // const navigate = useNavigate();

    if (
      !validarTexto(nombre) ||
      !validarTexto(apellido) ||
      !validarEmail(email) ||
      !validarContrasenia(password) ||
      !compararContrasenias(password, password2)
    ) {
      setErrorMessage("Verificar los datos ingresados");
      return;
    }

    const payload = {
      nombre,
      apellido,
      email,
      password,
    };

    try {
      const response = await axios.post(url + "/registro", payload);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setSuccessMessage("Registro exitoso");
      // navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage("El email ya se encuentra registrado");
      }
    }
  };

  return (
    <>
      <Register
        nombre={nombre}
        onNombreChange={setNombre}
        apellido={apellido}
        onApellidoChange={setApellido}
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
        password2={password2}
        onPassword2Change={setPassword2}
        onSubmit={handleSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default RegisterContainer;
