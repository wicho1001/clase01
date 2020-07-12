let datos = [{id: 1, name: "juanito"}, {id: 1, name: "wicho"}, {id: 1, name: "moy", assist: false}, {id: 1, name: "juanito", assist: true}];
console.log('datos; ', datos);
let errorMessage = false;

const filterAlumnos = () => {
  datos = datos.map((data) => {
    let copy={...data}
    if (copy.assist) {
      copy.asistio = true 
    } 
    return copy
  }).filter((alumno) => alumno.asistio);
}
const errorDiv = document.querySelector('#nombres')

const login = () => {
  document.querySelector('inputAnswer')
  if (inputAnswer.value !== 'wicho1001') {
    inputAnswer.value = 'camara no me awuito'
    errorMessage = true
    if (errorMessage) {
      datos.map((data) => {
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(data.name);         // Create a text node
        node.appendChild(textnode); 
        errorDiv.appendChild(node)
      })
    }
  }
}