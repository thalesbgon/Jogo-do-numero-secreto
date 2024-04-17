/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do numero secreto"; */
/* 
let paragrafo = document.querySelector ("p");
paragrafo.innerHTML = "Escolha um numero entre 1 e 10"; */
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
    
}
function exibirMsgInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
       
}
exibirMsgInicial()
function verificarChute() {
    let chute = document.querySelector ("input").value;
    // console.log("o botao foi clicado");
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeElementoNaLista = listaNumerosSorteados.length;

   if (quantidadeElementoNaLista == numeroEscolhido) {
        listaNumerosSorteados = [];
    
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)

}