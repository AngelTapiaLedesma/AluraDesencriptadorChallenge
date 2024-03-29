
let codigoEncriptacion = [
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["a","ai"],
    ["u","ufat"]
];

function botonEncriptar() {
    let textoEncriptar = document.getElementById("zona-encriptado");
    let textoCaja = document.getElementById("texto-caja");
    console.log(textoEncriptar.value);
    if(textoEncriptar.value.length > 0) {    
        let texto = encriptar(codigoEncriptacion,textoEncriptar);
        modificarTexto(textoCaja, texto);
        textoEncriptar.value = "";
    } else {
        modificarTexto(textoCaja,"Aun no hay texto");
    }
    return;
}

function botonDesencriptar() {
    let textoDesEncriptar = document.getElementById("zona-encriptado");
    let textoCaja = document.getElementById("texto-caja");
    let texto = desencriptar(codigoEncriptacion,textoDesEncriptar);
    modificarTexto(textoCaja, texto);
    textoDesEncriptar.value = "";
    return;
}

function modificarTexto(objeto, texto) {
    objeto.innerHTML = texto;
    return;
}

function encriptar(codigoEncriptacion, textoEncriptar) {
    let texto = textoEncriptar.value;
    
    for (let i = 0; i < codigoEncriptacion.length; i++) {
        if (texto.includes(codigoEncriptacion[i][0])) {
            texto = texto.replaceAll(codigoEncriptacion[i][0], codigoEncriptacion[i][1]);
        }
    } 
    return texto;
}

function desencriptar(codigoDesEncriptacion, textoDesEncriptar) {
    let texto = textoDesEncriptar.value;
    
    for (let i = 0; i < codigoDesEncriptacion.length; i++) {
        if (texto.includes(codigoEncriptacion[i][1])) {
            texto = texto.replaceAll(codigoEncriptacion[i][1], codigoEncriptacion[i][0]);
        }
    }
    return texto;
}

let copiarTexto = document.querySelector("boton-copiar");
copiarTexto.addEventListener("click",copiar = ()=> {
    var contenido = document.querySelector("texto-caja").textContent;
    navigator.clipboard.writeText(contenido)
});



/*

NOTAS: 
- Boton de copiar (no sirve)
- Checar si todo lo metido son espacios 
*/

