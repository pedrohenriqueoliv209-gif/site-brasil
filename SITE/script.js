function mostrarInfo(botao) {

    const card = botao.closest(".card");

    const informacoes = card.querySelector(".informacoes");

    informacoes.classList.toggle("aberto");


    if (informacoes.classList.contains("aberto")) {

        botao.textContent = "Esconder informações";

    } else {

        botao.textContent = "Ver informações";

    }

}