import { useState, useEffect } from "react";
import "./navbar.css";
import logoWhite from "../../../assets/DH_Logo_White.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlUsuario = "http://localhost:8080/api/v1/usuario/me";
  const token = "Bearer " + localStorage.getItem("token");
  const settings = {
    headers: {
      Authorization: token,
    },
  };
  
  const [username, setUsername] = useState("");
 
  useEffect(() => {
    if (location.pathname === "/") {
      const getUserName = async () => {
        try {
          const res = await axios.get(urlUsuario, settings)
          setUsername(res.data.nombre + " " + res.data.apellido)
        } catch (error) {
          console.error(error.message);
        }
      }
      getUserName();
    }
  },[])

  const botonCerrarSesion = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <header className="navbar-container">
      <nav>
        <h1>To-Do App</h1>
        {location.pathname === "/" ? (
          <div className="user-info">
            <p>{username}</p>
            <div className="user-image"></div>
            <button 
            id="closeApp"
            onClick={botonCerrarSesion}>
              <i className="fa-solid fa-right-from-bracket"></i> 
              Cerrar sesión
            </button>
          </div>
        ) : (
          <img src={logoWhite} alt="logo DH" />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
