let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
        if (nome.value.lenght < 3) {
            txtNome.innerHTML = "Nome Inválido"
            txtNome.style.color = "red"
        } else {
            txtNome.innerHTML = "Nome Válido"
            txtNome.style.color = "green"
            nomeOk = true
        }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }

}

function validaAssunto () {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.lenght >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite até 100 ccaracteres!"
        txt.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Texto válido!"
        txt.style.color = "green"
        assuntoOK = true
    }
}

function enviar () {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ("Formulário enviado com sucesso")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "650px"
    mapa.style.height = "450px"
}

function mapaNormal () {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}