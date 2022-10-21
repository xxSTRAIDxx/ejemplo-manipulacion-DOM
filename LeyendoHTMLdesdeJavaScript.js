//Antes se debe asociar desde el documento html el script de javascript.
const h1 = document.querySelector('h1'); //Seleccionamos el elemento que contenga esta etiqueta.
const form  = document.querySelector('#form');
const input  = document.querySelector('#calculo1');
const input2  = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular"); 
const presult = document.querySelector("#resultado");
form.addEventListener('submit', btnOnClick);//Manda un submitevent
//btn.addEventListener('click',btnOnClick); //Manda un pointerevent

//El parametro event lo suministra addeventlistener
function btnOnClick(event){
    console.log({event});
    //Prevent evita que se refresque la pagina, si lo hacemos con btn hay que agregarle type = "button" ya que por defecto es submit
    event.preventDefault();
    console.log(input.value + input2.value);
    const sumaInputs = input.value + input2.value;
    //Para editar el contenido aparte de innterText podemos utilizar append, innerHTML y appendChild
    presult.innerText=sumaInputs;
}
