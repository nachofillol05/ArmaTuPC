/*hacer gris una imagen
<img src="/img/logo.png" alt="a" id="pic"> (HTML)
if(disable){
    var pic = document.getElementById('pic')
    pic.style.filter = "grayscale(100%)"    
}
*/


// whatsApp (Array de los componentes)
let componentes = [4]
const texto = document.getElementById("parrafo")



 // BASE DE DATOS

 const productosDos = [
    { id: 5, class: "0", nombre: "Procesador Intel i3", precio: 25000, desc: "10th generacion 3ghz", img:"../img/i3.jpg", cond: false},
    { id: 6, class: "0", nombre: "Procesador Intel i5", precio: 40000, desc: "10th generacion 4ghz", img:"../img/i5.jpg", cond: false},
    { id: 7, class: "0", nombre: "Procesador Intel i7", precio: 60000, desc: "10th generacion 5ghz", img:"../img/i7.jpg", cond: false},
    { id: 8, class: "1", nombre: "RAM Kingston Fury Beast 8gb", precio: 5000, desc: "DDR4 2666Mhz", img:"../img/ramFury.jpg", cond: false},
    { id: 9, class: "1", nombre: "RAM PNY XLR8 Gaming 8gb", precio: 6000, desc: "DDR4 3000Mhz", img:"../img/PNYXLR8GMG.jpg", cond: false},
    { id: 10, class: "1", nombre: "RAM Adata XPG spectrix 8gb", precio: 8500, desc: "DDR4 3200Mhz", img:"../img/8gbadataxpgspectrix.jpg", cond: false},
    { id: 11, class: "2", nombre: "Gráfica 3060 ti KO Gaming", precio: 650000, desc: "Gddr6 8gb VRAM", img:"../img/pv3060tiKOgaming.jpg", cond: false},
    { id: 12, class: "2", nombre: "Gráfica 2060 Super", precio: 30000, desc: "Gddr6 6gb VRAM", img:"../img/pv2060super.jpg", cond: false},
    { id: 13, class: "2", nombre: "Gráfica Gamerock 3080", precio: 1500000, desc: "Gddr6 12gb VRAM", img:"../img/pvgamerock3080.jpg", cond: false},
    { id: 14, class: "3", nombre: "Mother Gigabyte z690", precio: 12000, desc: "Compatible con Intel", img:"../img/Gygabytez690UDs1700.jpg", cond: false},
    { id: 15, class: "3", nombre: "Mother Asus Prime Z690", precio: 10000, desc: "Compatible con Intel", img:"../img/AsusPrimeZ690-PS1700.jpg", cond: false},
    { id: 16, class: "3", nombre: "Mother Gigabyte z690-p", precio: 13000, desc: "Compatible con AMD", img:"../img/gigabytez690AorusEliteS1700.jpg", cond: false},
    { id: 17, class: "4", nombre: "Gabinete Essenses BZE30", precio: 15000, desc: "Con RGB, dimensiones: 321x321x400", img:"../img/EssensesBZE30TGCon3CoolersRGB.jpg", cond: false},
    { id: 18, class: "4", nombre: "Gabinete Aerocool Klaw RGB", precio: 20000, desc: "Con RGB, dimensiones: 500x321x600", img:"../img/AerocoolKlawRGB.jpg", cond: false},
    { id: 19, class: "4", nombre: "Gabinete Azza 110F Luminous", precio: 11000, desc: "Con RGB, dimensiones: 700x700x1000", img:"../img/Azza110FLuminous.jpg", cond: false}
]

// CODIGO

const contenedorProductos = document.getElementById('contenedor-productos');
let enable = true;

//CREAR

productosDos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto') 
    div.innerHTML = `
    <br><br>
    <hr><hr>
    `

    if(producto.class == 0){
        div.insertAdjacentHTML('beforeend', '<div id="procesadores"></div>');
    } else if (producto.class == 1){
        div.insertAdjacentHTML('beforeend', '<div  id="rams"></div>');
    } else if (producto.class == 2) {
        div.insertAdjacentHTML('beforeend', '<div id="graficas"></div>');
    } else if (producto.class == 3){
        div.insertAdjacentHTML('beforeend', '<div id="mothers"></div>');
    } else if (producto.class == 4){
        div.insertAdjacentHTML('beforeend', '<div  id="gabinetes"></div>');
    }
    
    var html_a_insertar = `
        <div class="tarjeta">
        <img id="ima${producto.id}" src=${producto.img} alt= "">
        <h3 class="titulos-productos" style="color: #AF9164">${producto.nombre}</h3>
        <p style="color: #AF9164">${producto.desc}</p>        
        <p class="precioProducto" style="color: #AF9164">Precio: $${producto.precio}</p>
        <button id="agregar${producto.id}" class="agregar${producto.class}"><i class="fas fa-shopping-cart"></i></button>
        <br>
        <button id="eliminar${producto.id}" class="eliminar${producto.class}" style="visibility:hidden;">Deseleccionar</button>
        
        <br>
    <div/>
    <style>
        .tarjeta:hover{
            transform: scale(1.06);
        }
        .tarjeta:hover #descripcion{
            display: inline;
        }   
    </style>
    `

    div.insertAdjacentHTML('beforeend', html_a_insertar);

    contenedorProductos.appendChild(div);

//ASIGNA BOTONES

    const botonesAgre = document.getElementsByClassName(`agregar${producto.class}`)
    const botonesEli = document.getElementsByClassName(`eliminar${producto.class}`)
                        //seleccionar
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id, producto.class)
        for(var i = 0; i<botonesAgre.length; i++){
            botonesAgre[i].style.visibility = "hidden";
            var idEli = "eliminar"+ producto.id
            if(botonesEli[i].id == idEli){
                botonesEli[i].style.visibility = "visible";
            }
            
        }
     
    })
                        //deseleccionar
    const deseleccionar = document.getElementById(`eliminar${producto.id}`)
    deseleccionar.addEventListener('click', () => {
        eliminarDelCarrito(producto.id, producto.class)
        for(var i = 0; i<botonesEli.length; i++){
            botonesAgre[i].style.visibility = "visible";
            botonesEli[i].style.visibility = "hidden";
        }
        
    })
})
//AGREGARRR
const agregarAlCarrito = (prodId, prodClass) => {
        const item = productosDos.find((prod) => prod.id === prodId)
        productosDos.forEach((producto) => {
                if(producto.id != prodId && producto.class == prodClass){
                    var pic = document.getElementById('ima' + producto.id)
                    pic.style.filter = "grayscale(100%)"
                }
        })
        
        componentes[prodClass] = item
        var textoLabel = ""
        var total = 0
        componentes.forEach((componente)=>{
            if(componente.precio != undefined){
                total += componente.precio
            }            
            textoLabel += "| " + componente.nombre + " $" + componente.precio  + " |" + "\n"
        })
        textoLabel += "total: $" + total
        texto.innerText = textoLabel.replace("| undefined $undefined |", "")
        
}

//ELIMINAR
const eliminarDelCarrito= (prodId, prodClass) => {
    componentes[prodClass] = {id: 00, class: '00', nombre: 'Sin seleccionar', precio: 00, desc: ''}
    productosDos.forEach((producto) => {
        if(producto.class == prodClass){
            var pic = document.getElementById('ima' + producto.id)
            pic.style.filter = "grayscale(0%)"
        }
    })
        textoLabel = ""
        total = 0
        componentes.forEach((componente)=>{
            if(componente.precio != undefined){
                total += componente.precio
            }            
            textoLabel += "| " + componente.nombre + " $" + componente.precio  + " |" + "\n"
        })
        textoLabel += "total: $" + total
        texto.innerText = textoLabel.replace("| undefined $undefined |", "")
}



function HacerCompra(){ 
    if(!texto.innerText == ""){
        var link= "https://api.whatsapp.com/send?phone=5493518030737&text=Hola los componentes que he seleccionado son: \n" + texto.innerText
        window.location = link
    }
    
}z

    
    

