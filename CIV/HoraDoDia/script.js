function carrega() {
    var agora = new Date();
    var hora = agora.getHours();
    var div = window.document.querySelector("div");
    var body = window.document.querySelector("body");
    var msg = 'Mensagem'
    if(hora < 12) {
        body.style.backgroundImage = 'url("morning.jpg")';
        msg = 'Bom dia';
    } else if(hora < 18) {
        body.style.backgroundImage = 'url("afternoon.jpg")';
        msg = 'Boa tarde';
    } else {
        body.style.backgroundImage = 'url("night.jpg")';
        msg = 'Boa noite';
    }
    div.innerHTML = `<strong>Agora são ${hora} horas</strong> <br><br>${msg}`;
}
