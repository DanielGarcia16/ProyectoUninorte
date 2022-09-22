document.getElementById("open").addEventListener("click", open_close_menu);
document.getElementById("profesores").addEventListener("click",selector_profesores);
document.getElementById("estudiantes").addEventListener("click",selector_estudiantes);
document.getElementById("informacion").addEventListener("click",selector_informacion);
document.getElementById("materias").addEventListener("click",selector_materias);

var side_menu=document.getElementById('menu_side');
var open=document.getElementById('open');
var body=document.getElementById('body');
var informacion=document.getElementById('informacion');
var profesores=document.getElementById('profesores');
var estudiantes=document.getElementById('estudiantes');
var materias=document.getElementById('materias');
var texto=document.getElementById('texto');

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

function selector_profesores(){
    informacion.classList.remove("selector");
    profesores.classList.add("selector");
    estudiantes.classList.remove("selector");
    materias.classList.remove("selector");
    let div=document.querySelector(".div");
    texto.removeChild(div);
    texto_profesorJS();
}

function selector_estudiantes(){
    informacion.classList.remove("selector");
    profesores.classList.remove("selector");
    estudiantes.classList.add("selector");
    materias.classList.remove("selector");
    let div=document.querySelector(".div");
    texto.removeChild(div);
    texto_estudianteJS();
}

function selector_materias(){
    informacion.classList.remove("selector");
    profesores.classList.remove("selector");
    estudiantes.classList.remove("selector");
    materias.classList.add("selector");
    let div=document.querySelector(".div");
    texto.removeChild(div);
    texto_materiasJS();
}

function selector_informacion(){
    informacion.classList.add("selector");
    profesores.classList.remove("selector");
    estudiantes.classList.remove("selector");
    materias.classList.remove("selector");
    let div=document.querySelector(".div");
    texto.removeChild(div);
    texto_informacionJS();
}

function texto_informacionJS(){
    let div=document.createElement("div");
    div.className="div";
    div.innerHTML="<h1>Información personal</h1><br><p>Nombre: </p><br><p>Apellido: </p><br><p>Cédula: </p><br><p>Género: </p><br><p>Email: </p><br><p>Celular: </p>";
    texto.appendChild(div);
}

function texto_profesorJS(){
    let div=document.createElement("div");
    div.className="div";
    div.innerHTML="<h1>Sistema de gestión de Profesores</h1><br><p>Nuevo profesor: </p><br><p>Eliminar profesor: </p><br><p>Asignar clave: </p><br><p>Asignar Materia: </p><br><p>Retirar Materia: </p>";
    texto.appendChild(div);
}

function texto_estudianteJS(){
    let div=document.createElement("div");
    div.className="div";
    div.innerHTML="<h1>Sistema de gestión de Estudiantes</h1><br><p>Nuevo Estudiante: </p><br><p>Eliminar estudiante: </p><br><p>Asignar clave: </p><br><p>Asignar Materia: </p><br><p>Retirar Materia: </p>";
    texto.appendChild(div);
}

function texto_materiasJS(){
    let div=document.createElement("div");
    div.className="div";
    div.innerHTML="<h1>Sistema de gestión de materias</h1><br><p>Nueva materia: </p><br><p>Eliminar materia: </p><br><p>Asignar id materia: </p><br><p>Agregar actividades: </p>";
    texto.appendChild(div);
}


// if (window.innerWidth < 760){

//     body.classList.add("body_move");
//     side_menu.classList.add("menu__side_move");
// }

// window.addEventListener("resize", function(){

//     if (window.innerWidth > 760){

//         body.classList.remove("body_move");
//         side_menu.classList.remove("menu__side_move");
//     }

//     if (window.innerWidth < 760){

//         body.classList.add("body_move");
//         side_menu.classList.add("menu__side_move");
//     }

// });

