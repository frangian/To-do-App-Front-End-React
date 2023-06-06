  /* ---------------------------------- texto --------------------------------- */
  export const validarTexto = (texto) => {
    const regex =
      /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

    if (regex.test(texto)) {
      return true;
    }
    return false;
  };

  // La cual hace match con las siguientes reglas:
  // - Una o mas palabras separadas con por lo menos un espacio
  // - Cada palabra debe cumplir las siguientes reglas:
  // - Los caracteres permitidos mas de una vez en cada palabra son[A - Za - zÑñÁáÉéÍíÓóÚú] letras mayusculas y minúsculas, incluidos las vocales con tilde y las Ñ)
  // Los únicos símbolos permitidos son el apóstrofo y el guión['\-] y estos se permiten a lo sumo una vez {0,1}
  // - Asumiendo que cada palabra debe empezar y terminar con una letra la expresion lleva el cuantificador + .En caso de permitirse empezar y / o terminar con los símbolos permitidos los cuantificadores deberían cambiarse por * (cero o más)

  /* ---------------------------------- email --------------------------------- */
  export const validarEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  // Descripcion de las reglas aceptadas: https://lineadecodigo.com/javascript/validar-el-email-con-javascript/

  /* -------------------------------- password -------------------------------- */
  export const validarContrasenia = (contrasenia) => {
    if (
      /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,50})$/.test(contrasenia)
    ) {
      return true;
    }
    return false;
  };

  // La cual hace match con las siguientes reglas:
  // - de 6 a 20 caracteres
  // - al menos 1 letra minuscula
  // - al menos 1 letra mayuscula
  // - al menos 1 numero

  export const compararContrasenias = (contrasenia_1, contrasenia_2) => {
    if (contrasenia_1 === contrasenia_2) {
      return true;
    }
    return false;
  };