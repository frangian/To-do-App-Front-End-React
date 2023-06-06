import "./tasks.css";

const Tasks = ({
  nuevaTarea,
  onNuevaTareaChange,
  onSubmit,
  tareasPendientes,
  onClickBotonTareaCheck,
  onClickBotonDeleteTarea,
  tareasTerminadas,
  contadorTareasFinalizadas,
}) => {
  return (
    <div
      className="tasks-container"
      style={{ minHeight: "calc(100vh - 70px - 32px)" }}
    >
      {/* carga de tareas */}
      <form className="nueva-tarea" onSubmit={onSubmit}>
        <input
          id="nuevaTarea"
          type="text"
          value={nuevaTarea.description}
          onChange={(e) => onNuevaTareaChange(e.target.value)}
          placeholder="nueva tarea"
        />
        <button type="submit">
          <i className="fa-solid fa-pencil">
            {/* <img
              className="oculto"
              style={{ width: "1rem" }}
              src="./assets/loader.gif"
              alt=""
            /> */}
          </i>{" "}
          Crear tarea
        </button>
      </form>
      <ul className="tareas-pendientes">
        {/* contenedor vacío para las que pasen a pendientes */}
        {tareasPendientes.map((tarea) => {
          return (
            <li key={tarea.id} className="tarea">
              <button
                className="change"
                id={tarea.id}
                onClick={(e) =>
                  onClickBotonTareaCheck(
                    tarea.description,
                    tarea.completed,
                    e.target.id
                  )
                }
              >
                <i className="fa-regular fa-circle"></i>
              </button>
              <div className="descripcion">
                <p className="nombre">{tarea.description}</p>
                <p className="timestamp">{tarea.createdAt}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <h2>
        Tareas finalizadas{" "}
        <span id="cantidad-finalizadas">{contadorTareasFinalizadas}</span>
      </h2>
      <ul className="tareas-terminadas">
        {/* contenedor vacío para las que pasen a terminadas */}

        {tareasTerminadas.map((tarea) => {
          return (
            <li key={tarea.id} className="tarea">
              <div className="hecha">
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <div className="descripcion">
                <p className="nombre">{tarea.description}</p>
                <div className="cambio-estados">
                  <button
                    className="incompleta fa-solid fa-rotate-left"
                    id={tarea.id}
                    onClick={(e) =>
                      onClickBotonTareaCheck(
                        tarea.description,
                        tarea.completed,
                        e.target.id
                      )
                    }
                  ></button>
                  <button
                    className="borrar fa-regular fa-trash-can"
                    id={tarea.id}
                    onClick={(e) => onClickBotonDeleteTarea(e.target.id)}
                  ></button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
