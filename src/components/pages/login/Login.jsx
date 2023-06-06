import { Link } from "react-router-dom";
import "./login.css";

const Login = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onSubmit,
  errorMessage,
}) => {
  return (
    <div
      className="login-container"
      style={{ minHeight: "calc(100vh - 70px - 32px)" }}
    >
      <form className="form-login" onSubmit={onSubmit}>
        <div className="form-header">
          <h2>To-Do App</h2>
          <p className="rounded">Login</p>
        </div>
        <label>Email</label>
        <input
          id="inputEmail-login"
          type="text"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          id="inputPassword-login"
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
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
        <button type="submit">Ingresar</button>
      </form>
      <div className="ingresarA">
        <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
      </div>
    </div>
  );
};

export default Login;
