function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    var hora = 22
    msg.innerHTML = "Agora são " + hora + ":" + minutos 

    if( hora >=0 && hora < 12) {
        img.src = "/JavaScript/horaDoDia/imagens/manha.png"
        document.body.style.background = "#a1a046"
    
    }else if (hora >= 12 && hora <= 18) {
        img.src = "/JavaScript/horaDoDia/imagens/tarde.png"
        document.body.style.background = "#aa5321"
    }else {
        img.src = "/JavaScript/horaDoDia/imagens/noite.png"
        document.body.style.background = "#515154"
    }


}