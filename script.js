const textArea = document.querySelector(".area-de-texto");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesncriptada
}

function copiar (){
    var contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("El mensaje se copió correctamente! Por favor pegar el texto seleccionado")


}




