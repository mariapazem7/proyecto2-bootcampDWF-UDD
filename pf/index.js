const preguntas = [
 {   
 pregunta: "cuantas veces al ano vas de vacaciones?",
 opciones: ["1","2","3"],
 respuesta: {},
 },

 {
 pregunta:"viajas dentro o fuera del pais?", 
 opciones: ["dentro", "fuera"],
 respuesta: {},
 },

 {
 pregunta:"sueles viajar solo o acompanado?",
 opciones:["solo", "acompanado"],
 respuesta: {},
 },

 {
 pregunta:"cual es el medio de transporte que usas para viajar?",
 opciones: ["auto", "avion", "tren"],
 respuesta: {},
 },

 {
 pregunta:"viajas con maleta, mochila o ambas?", 
 opciones:["maleta","mochila","ambas"],
 respuesta: {},
 },

 {
 pregunta:"de los siguientes paises cual prefieres visitar?", 
 opciones:["brasil","chile","italia"],
 respuesta: {},
 },

 {
 pregunta:"Donde prefieres hospedarte?",
 opciones: ["hotel", "hostel","arbnb"],
 respuesta: {},
 },

 {
 pregunta:"cuando viajas, recorres la ciudad pagando tours o te guias solo?",
 opciones: ["tour", "solo"],
 respuesta: {},
 }
  ];


const realizarPregunta = (pregunta) => {
     console.log('realizarPregunta');
     const respuesta = prompt(`${pregunta["pregunta"]}\nOpciones: ${pregunta["opciones"].join(", ")}\nEscribe tu respuesta: `).trim();
 if(pregunta["opciones"].includes(respuesta)) {
          pregunta["respuesta"][respuesta] = (pregunta["respuesta"][respuesta] || 0) + 1; 
     } else {
       console.log("La opción seleccionada no es válida.");
       alert("Escriba una opcion valida");
       realizarPregunta(pregunta);
     };
    
};

const realizarEncuesta = (preguntas) => {
     console.log('realizarEncuesta');

     preguntas.forEach((pregunta) => {
          realizarPregunta(pregunta);
     });
     preguntas.forEach((pregunta) => {
          mostrarResultados(pregunta); 
     });
     console.log("Final") 

     };
        
function mostrarResultados(pregunta) {
     console.log(`Resultados para la pregunta: ${pregunta["pregunta"]}`);
     for (let opcion of pregunta["opciones"]) {
       console.log(`Opción "${opcion}": ${ pregunta["respuesta"][opcion] || 0} votos`);
     }
}; 
     
console.log('Inicio');
let respuesta = confirm("Desea iniciar la votacion?");

if (respuesta) {
     let seguirVotando = true; 
     while (seguirVotando) {
         realizarEncuesta(preguntas);
         seguirVotando = confirm("Desea seguir la votación?");
     }
     alert("Gracias por participar!");
} else {
     alert("Adios!");
};    






