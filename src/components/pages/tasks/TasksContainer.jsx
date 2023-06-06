import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TasksContainer = () => {
  const urlTarea = "http://localhost:8080/api/v1/tasks";
  const token = "Bearer " + localStorage.getItem("token");
  const settings = {
    headers: {
      Authorization: token,
    },
  };
  const [tareasPendientes, setTareasPendientes] = useState([]);
  const [tareasTerminadas, setTareasTerminadas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({
    description: "",
    completed: false,
  });
  const [contadorTareasFinalizadas, setContadorTareasFinalizadas] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const token = "Bearer " + localStorage.getItem("token");
      if (!token || token === "Bearer null") {
        navigate("/login");
      } else {
        getTareas();
      }
    }, 0);
  }, [navigate]);

  const getTareas = async () => {
    try {
      const res = await axios.get(urlTarea, settings);
      const listadoTareasPendientes = res.data.filter(
        (tareas) => tareas.completed === false
      );
      setTareasPendientes(listadoTareasPendientes);
      const listadoTareasTerminadas = res.data.filter(
        (tareas) => tareas.completed === true
      );
      setTareasTerminadas(listadoTareasTerminadas);
      setContadorTareasFinalizadas(listadoTareasTerminadas.length);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleNuevaTareaChange = (event) => {
    setNuevaTarea({ ...nuevaTarea, description: event });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(urlTarea, nuevaTarea, settings);
      // console.log(res.data);
      setTareasPendientes((prevTareas) => [res.data, ...prevTareas]);
      setNuevaTarea({
        description: "",
        completed: false,
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleBotonTareaCheck = async (description, completed, id) => {
    const payload = {
      description: description,
      completed: completed === true ? false : true,
    };

    try {
      await axios.put(urlTarea + "/" + id, payload, settings);
      getTareas();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleBotonDeleteTarea = async (id) => {
    try {
      const res = await axios.delete(urlTarea + "/" + id, settings)
      alert(res.data)
      getTareas();
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <>
      <Tasks
        nuevaTarea={nuevaTarea}
        onNuevaTareaChange={handleNuevaTareaChange}
        onSubmit={handleSubmit}
        tareasPendientes={tareasPendientes}
        onClickBotonTareaCheck={handleBotonTareaCheck}
        onClickBotonDeleteTarea={handleBotonDeleteTarea}
        tareasTerminadas={tareasTerminadas}
        contadorTareasFinalizadas={contadorTareasFinalizadas}
      />
    </>
  );
};

export default TasksContainer;
