
class Pregunta {
  constructor(textoPregunta, opciones) {
    this.textoPregunta = textoPregunta;
    this.opciones = opciones.map((opcion) => opcion.trim());
    this.respuestas = {};
  };

  recibirRespuesta(respuesta, encuesta) {
    if (this.opciones.includes(respuesta)) {
      this.respuestas[respuesta] = (this.respuestas[respuesta] || 0) + 1;
    } else {
      console.log("Escriba una opcion valida");
      alert("Escriba una opcion valida");
      encuesta.votar(this);
    }
  };

  mostrarVotacion() {
    console.log(`muestra de votos para la pregunta: "${this.textoPregunta}"`);
    this.opciones.forEach((opcion) => {
      console.log(`Opcion "${opcion}": ${this.respuestas[opcion]|| 0} votos`);});
  } 
};

class Encuesta {
  constructor(preguntas) {
    this.preguntas = preguntas;
  };

  ejecutar() {
    console.log("inicio");
    confirm("Desea iniciar la votacion?");
    let seguirVotando = true;
    while (seguirVotando) {
      this.preguntas.forEach((pregunta) => this.votar(pregunta));
      seguirVotando = confirm("¿Desea seguir votando?");
      this.preguntas.forEach((pregunta) => pregunta.mostrarVotacion());
    };
  };

  votar(pregunta) {
    const respuesta = prompt(`Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`);
    if (respuesta !== null) {
      pregunta.recibirRespuesta(respuesta.trim(), this)
    } else {
      console.log("Votación cancelada");
      alert ("Votación cancelada");
    };
  };
};

const preguntas = [
  new Pregunta("cuantas veces al ano vas de vacaciones?", ["1 ","2","3"]),
  new Pregunta("viajas dentro o fuera del pais?", ["dentro", "fuera"]),
  new Pregunta("sueles viajar solo o acompanado?", ["solo", "acompanado"]),
  new Pregunta("cual es el medio de transporte que usas para viajar?", ["auto", "avion", "tren"]),
  new Pregunta("viajas con maleta, mochila o ambas?", ["maleta","mochila","ambas"]),
  new Pregunta("de los siguientes paises cual prefieres visitar?", ["brasil","chile","italia"]),
  new Pregunta("Donde prefieres hospedarte?", ["hotel", "hostel","arbnb"]),
  new Pregunta("cuando viajas, recorres la ciudad pagando tours o te guias solo", ["tour", "solo"]),
];

const ejecutarEncuesta = new Encuesta(preguntas);
ejecutarEncuesta.ejecutar();
