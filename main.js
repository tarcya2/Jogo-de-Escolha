function escolha (opcao) {
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll(".choice");
    if (opcao === 'alegre') {
        titulo.innerText = "Encontro aparentemente fofo";
        imagem.src = "1.png";
        historia.innerText = "Você encontra um pokémon muito fofo, ele te oferece ajuda. Você aceita a ajuda ou segue sem ele?";
        botoes[0].innerText ="Aceitar a ajuda";
        botoes[0].setAttribute("onclick", "escolha('acompanhado')");
        botoes[1].innerText ="Seguir sozinho";
        botoes[1].setAttribute("onclick", "escolha('sozinho')");
    }
    else if (opcao === 'assustador') {
        titulo.innerText = "Encontro assustador";
        imagem.src = "3.png";
        historia.innerText ="Você encontra um pokémon asustador, ele te oferece ajuda. Você aceita a ajuda ou segue sem ele?";
        botoes[0].innerText ="Aceitar a ajuda";
        botoes[0].setAttribute("onclick", "escolha('acompanhado1')");
        botoes[1].innerText ="Seguir sozinho";
        botoes[1].setAttribute("onclick", "escolha('sozinho1')");
    }
    else if (opcao === 'acompanhado') {
        titulo.innerText = "Ele parecia amigável!!";
        imagem.src = "2.png";
        historia.innerText ="Ele estava com muita raiva e fome, você foi derrotado por ele! Fim de jogo!";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === 'sozinho') {
        titulo.innerText = "Um caminho alegre com muita aventura";
        imagem.src = "5.png";
        historia.innerText = "Você segue sozinho e encontra um belo final cheio de pokemons alegres! Fim de jogo!";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === 'acompanhado1') {
        titulo.innerText = "Obstagoon é um ótimo parceiro!";
        imagem.src = "4.png";
        historia.innerText = "Obstagoon te protege de todo o perigo da floresta e vocês chegam em uma bela floresta cheia de vida! Fim de jogo!";
        botoes.forEach(botao => botao.style.display = "none");
    }
    else if (opcao === 'sozinho1') {
        titulo.innerText = "Perdido e em apuros!";
        imagem.src = "6.png";
        historia.innerText = "Você fica perdido na mata e está sendo atacado por pokemons assustadores! Fim de jogo!";
        botoes.forEach(botao => botao.style.display = "none");
    }
}