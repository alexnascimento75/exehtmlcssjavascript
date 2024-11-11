function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12){ // Bom dia!  
        img.src ="manha.png" 
        document.body.style.background="#a8a7a2"
    } else if (hora >= 12 && hora < 18){ // Boa tarde! 
        img.src ="tarde.png"
        document.body.style.background="#d58347"
    } else{ // Boa noite!
        img.src ="noite.png"
           document.body.style.background="#1a1b2d"
    }
}
