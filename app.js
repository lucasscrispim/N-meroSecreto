//let listaDeNumerosSorteados = [];
//let numeroLimite = 50;
//let numeroSecreto = gerarNumeroAleatorio();
//let tentativas = 1;

//function exibirTextoNaTela(tag, texto) {
//    let campo = document.querySelector(tag);
//    campo.innerHTML = texto;
//    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
//}

//function exibirMensagemInicial() {
//    exibirTextoNaTela('h1', 'Jogo do número secreto');
//    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//}

//exibirMensagemInicial();

//function verificarChute() {
//    let chute = document.querySelector('input').value;
    
//    if (chute == numeroSecreto) {
//        exibirTextoNaTela('h1', 'Acertou!');
//        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
//        exibirTextoNaTela('p', mensagemTentativas);
//        document.getElementById('reiniciar').removeAttribute('disabled');
//    } else {
//        if (chute > numeroSecreto) {
//            exibirTextoNaTela('p', 'O número secreto é menor');
//        } else {
//            exibirTextoNaTela('p', 'O número secreto é maior');
//        }
//        tentativas++;
//        limparCampo();
//    }
//}

//function gerarNumeroAleatorio() {
//    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

//    if (quantidadeDeElementosNaLista == numeroLimite) {
//        listaDeNumerosSorteados = [];
//    }
//    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//        return gerarNumeroAleatorio();
//    } else {
//        listaDeNumerosSorteados.push(numeroEscolhido);
//        console.log(listaDeNumerosSorteados)
//        return numeroEscolhido;
//    }
//}

//function limparCampo() {
//    chute = document.querySelector('input');
//    chute.value = '';
//}

//function reiniciarJogo() {
//    numeroSecreto = gerarNumeroAleatorio();
//    limparCampo();
//    tentativas = 1;
//    exibirMensagemInicial();
//    document.getElementById('reiniciar').setAttribute('disabled', true)
//}

let listaDeNumerosSorteados = []; // Array para armazenar os números sorteados
let numeroLimite = 50; // Limite máximo do número secreto
let numeroSecreto = gerarNumeroAleatorio(); // Gera um número secreto aleatório
let tentativas = 1; // Contador de tentativas

// Função para exibir texto na tela em uma tag HTML específica
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona a tag HTML
    campo.innerHTML = texto; // Atualiza o conteúdo da tag com o texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 }); // Fala o texto em voz alta
}

// Função para exibir a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // Exibe o título do jogo
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // Exibe as instruções do jogo
}

exibirMensagemInicial(); // Chama a função para exibir a mensagem inicial

// Função para verificar o chute do usuário
function verificarChute() {
    let chute = document.querySelector('input').value; // Obtém o valor do input

    if (chute == numeroSecreto) { // Verifica se o chute está correto
        exibirTextoNaTela('h1', 'Acertou!'); // Exibe mensagem de acerto
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Define a palavra correta para tentativa(s)
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // Cria a mensagem de tentativas
        exibirTextoNaTela('p', mensagemTentativas); // Exibe a mensagem de tentativas
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    } else {
        if (chute > numeroSecreto) { // Verifica se o chute é maior que o número secreto
            exibirTextoNaTela('p', 'O número secreto é menor'); // Exibe dica de número menor
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior'); // Exibe dica de número maior
        }
        tentativas++; // Incrementa o contador de tentativas
        limparCampo(); // Limpa o campo de input
    }
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Gera um número aleatório entre 1 e 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // Obtém a quantidade de números sorteados

    if (quantidadeDeElementosNaLista == numeroLimite) { // Verifica se todos os números já foram sorteados
        listaDeNumerosSorteados = []; // Reseta a lista de números sorteados
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // Verifica se o número já foi sorteado
        return gerarNumeroAleatorio(); // Gera um novo número se o número já foi sorteado
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número à lista de sorteados
        console.log(listaDeNumerosSorteados); // Exibe a lista de números sorteados no console
        return numeroEscolhido; // Retorna o número escolhido
    }
}

// Função para limpar o campo de input
function limparCampo() {
    chute = document.querySelector('input'); // Seleciona o campo de input
    chute.value = ''; // Limpa o valor do campo de input
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    exibirMensagemInicial(); // Exibe a mensagem inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar
}






