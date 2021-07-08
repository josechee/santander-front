//const x =5
//console.log(x);

const forms = document.querySelectorAll(".signup-form")//para ir a traer a la clase la primera clsase del html
//console.log(forms);


/**Si retorna algo *///fetch lo que hace es lanzar asincrona con fetch
const getTemplate = () => {
    return fetch("./template.html")
      .then((response) => response.text())
  }

/*Si no retorna nada */
function sendEmail(miVariable) {
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("input").value
    getTemplate()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "error al obtener el templete");
      })
  }
  

// const sendEmail = (miVariable)=>{
//     e.preventDefault();
//     console.log(miVariable);
// }

for (let i = 0; i < forms.length; i++){
    //console.log(forms[i]);
    forms[i].addEventListener("submit",sendEmail)
}
