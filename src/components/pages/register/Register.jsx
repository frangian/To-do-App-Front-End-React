import { Link } from "react-router-dom";
import "./register.css";

const Register = ({
  nombre,
  onNombreChange,
  apellido,
  onApellidoChange,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  password2,
  onPassword2Change,
  onSubmit,
  successMessage,
  errorMessage,
}) => {
  return (
    <div
      className="register-container"
      style={{ minHeight: "calc(100vh - 70px - 32px)" }}
    >
      <form className="form-register" onSubmit={onSubmit}>
        <div className="form-header">
          <h2>To-Do App</h2>
          <p className="rounded">Register</p>
        </div>
        <label>Nombre</label>
        <input
          id="inputNombre"
          type="text"
          value={nombre}
          onChange={(e) => onNombreChange(e.target.value)}
        />
        <label>Apellido</label>
        <input
          id="inputApellido"
          type="text"
          value={apellido}
          onChange={(e) => onApellidoChange(e.target.value)}
        />
        <label>Email</label>
        <input
          id="inputEmail"
          type="text"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          id="inputPassword"
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
        <label>Repetir contraseña</label>
        <input
          id="inputPasswordRepetida"
          type="password"
          value={password2}
          onChange={(e) => onPassword2Change(e.target.value)}
        />
        <div
          id="registroCorrecto"
          style={{ display: "none", color: "white", margin: "20px 0" }}
        />
        <div
          id="errorCampo"
          style={{ display: "none", color: "red", margin: "20px 0" }}
        />
        {successMessage && (
          <div
            style={{
              color: "white",
              paddingBottom: "15px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div
            style={{
              color: "red",
              paddingBottom: "15px",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </div>
        )}
        <button type="submit">Crear Cuenta</button>
      </form>
      <div className="ingresarA">
        <Link to="/login">¿Ya tienes una cuenta? Ingrese aquí</Link>
      </div>
    </div>
  );
};

export default Register;
