import { ProductServices } from "../services/producto-service.js";

const boton=document.getElementById("iniciar");
boton.addEventListener("click",(evento)=>{
    evento.preventDefault();

    const url=new URL(window.location);
    const id=url.searchParams.get("id");


    const url1=document.getElementById("url").value;
    const nombre=document.getElementById("nombre").value;
    const categoria=document.getElementById("categoria").value;
    const precio=document.getElementById("precio").value;
    const descripcion=document.getElementById("descripcion").value;

    ProductServices.ActualizarProducto(url1,nombre,categoria,precio,descripcion,id).then(respuesta=>{
        window.location.href="../screens/todos_admin.html";
    }).catch(error=>{
        console.log("Ocurrió un error");
    })
});

const TraerInformacion= async()=>{
    const url=new URL(window.location);
    const id=url.searchParams.get("id");

    if(id===null){
        window.location.href="../screens/todos_admin.html";
    }

    const url1=document.getElementById("url");
    const nombre=document.getElementById("nombre");
    const categoria=document.getElementById("categoria");
    const precio=document.getElementById("precio");
    const descripcion=document.getElementById("descripcion");

    try {
        const producto=await ProductServices.DetalleProducto(id);
        if(producto){
            url1.value=producto.url;
            nombre.value=producto.nombre;
            categoria.value=producto.categoria;
            precio.value=producto.precio;
            descripcion.value=producto.descripcion;
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log("Ocurrió algun error");
        window.location.href="../screens/todos_admin.html";
    }

}

TraerInformacion();