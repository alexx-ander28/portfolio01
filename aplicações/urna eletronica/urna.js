let botao = document.querySelectorAll(".btn")
let vis1 = document.getElementById("inpt1")
let vis2 = document.getElementById("inpt2")
let fotoCand = document.getElementsByClassName("foto")[0]
let infoCand = document.querySelectorAll("span")
let tela = document.getElementsByClassName("tela")[0]
let fim = document.getElementById("FIM")
let conf = document.getElementById("conf")
let cor = document.getElementById("corrige")
let audio = new Audio()
audio.src = "musica-fim.mp3"


function clicar(event) { // QUANDO CLICAR JA APARECER O NUMERO CLICADO NO VISOR
    botao = event
        // console.log(botao)
    if (vis1.value == "") {
        vis1.value = botao
    } else if (vis2.value == "") {
        vis2.value = botao
    } else if (vis1.value != "" && vis2.value != "") {
        return
    }
}


function candidato(imagem, NomeCand, NomePart) {
    img.src = imagem
    infoCand[0].innerText = NomeCand
    infoCand[1].innerText = NomePart
    fotoCand.appendChild(img)
}


let img = document.createElement("img") // criando um elemento usando a tag img e atribuindo a variavel img
img.setAttribute("id", "fotoCand") // add um id com o nome "foto"  a img

function ApareceCand() { // PARA APARECER OS CANDIDATOS NO VISOR
    if (vis1.value == 1 && vis2.value == 7) {
        candidato("img/bolsonaro.jpg", "Jair Bolsonaro", "Partido Progressista")
    }
    if (vis1.value == 1 && vis2.value == 3) {
        candidato("img/dilma.jpg", "Dilma Rousseff", "Partido dos Trabalhadores")
    }
    if (vis1.value == 7 && vis2.value == 0) {
        candidato("img/daciolo.jpg", "Daciolo", "Coligação Avante")
    }
    if (vis1.value == 1 && vis2.value == 4) {
        candidato("img/haddad.jpg", "Luiz Haddad", "Partido dos Trabalhadores")
    }
    if (vis1.value == 4 && vis2.value == 1) {
        candidato("img/durval.jpg", "Marcos Durval", "Partido PROS")
    }
}

function corrige() {
    contvot = 0 // para impedir q finalize a votação      
        //limpando todos os campos
    vis1.value = null
    vis2.value = null
    infoCand[0].innerText = ""
    infoCand[1].innerText = ""
    if (fotoCand.children.length) { // se tiver "tamanho"
        fotoCand.removeChild(img)
    }
    const filhos = tela.children // retorna uma lista com todos os filhos 
    for (i = 0; i <= filhos.length - 2; i++) {
        filhos[i].style.visibility = "visible"
    }
    cor.style.visibility = "visible"

}

let contvot = 0

function branco() {
    vis1.value = null
    vis2.value = null
    contvot += 1
        // console.log(contvot)    
    const filhos = tela.children // retorna uma lista com todos os filhos 
    for (i = 0; i <= filhos.length - 2; i++) {
        filhos[i].style.visibility = "hidden"
    }
    cor.style.visibility = "hidden"
}

function confirma() { // ao clicar em confirmar reproduz o barulho    
    if ((vis1.value == 1 && vis2.value == 7) || (vis1.value == 1 && vis2.value == 3) || (vis1.value == 7 && vis2.value == 0) || (vis1.value == 1 && vis2.value == 4) || (vis1.value == 4 && vis2.value == 1) || contvot > 0) {
        audio.play()
        fim.style.display = "block"
        filhos = tela.children
        for (i = 0; i <= filhos.length; i++) {
            filhos[i].style.display = "none"
        }
    }
    contvot = 0
}

cont = setInterval(ApareceCand, 1000)