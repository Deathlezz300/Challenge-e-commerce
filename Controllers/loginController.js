import { ListaUsuarios } from "../services/usuario-services.js";

const boton=document.getElementById("iniciar");
boton.addEventListener("click", (evento) =>{
    evento.preventDefault();
    const nombre=document.getElementById("usuario").value;
    const clave=document.getElementById("clave").value;
    validarUsuario(nombre,clave);
});

const validarUsuario= (nombre,clave)=>{
    ListaUsuarios().then( (usuarios)=>{
        const respuesta=usuarios.some( (usuario)=>{
            return usuario.nombre===nombre && usuario.clave===clave; 
        })
        if(respuesta){
            window.location.href="../screens/todos_admin.html";
        }else{
            alert("Esta mal");
        }
    })
};