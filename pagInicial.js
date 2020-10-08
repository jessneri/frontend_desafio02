//fetch com lista de filmes
const listaDeFilmesGeral = (url) => {
    return fetch(url).then((resposta) => resposta.json());
};
//criar top filmes
const topFilmes = (filmes) => {
    const filme = document.createElement("div");
    filme.classList.add("filme");
    divFilmes.appendChild(filme);

    const infoDeFilme = document.createElement("div");
    infoDeFilme.classList.add("infoDeFilme");
    filme.appendChild(infoDeFilme);

    const estrelinha = document.createElement("img");
    estrelinha.classList.add("estrelinha");
    estrelinha.style.background = "url('Star_2.png')";
    infoDeFilme.appendChild(estrelinha);

    const infoEspecifica = document.createElement("div");
    infoEspecifica.classList.add("infoEspecifica");
    infoDeFilme.appendChild(infoEspecifica);

    const nomes = document.createElement("div");
    nomes.classList.add("nomes");
    infoEspecifica.appendChild(nomes);

    const nomeDoFilme = document.createElement("p");
    nomeDoFilme.classList.add("nomeDoFilme");
    nomeDoFilme.innerText = `${filmes.title}`;
    nomes.appendChild(nomeDoFilme);

    const nota = document.createElement("div");
    nota.classList.add("nota");
    nomes.appendChild(nota);

    const estrelinha2 = document.createElement("img");
    estrelinha2.classList.add("estrelinha2");
    estrelinha2.style.background = "url('Star_1.png')";
    nota.appendChild(estrelinha2);

    const notaDoFilme = document.createElement("p");
    notaDoFilme.classList.add("notaDoFilme");
    notaDoFilme.innerText = `${filmes.vote_average}`;
    nota.appendChild(notaDoFilme);

    const sacolaDoFilme = document.createElement("button");
    sacolaDoFilme.classList.add("sacolaDoFilme");
    infoEspecifica.appendChild(sacolaDoFilme);

    const sacolatexto = document.createElement("p");
    sacolatexto.innerText = "Sacola";
    sacolaDoFilme.appendChild(sacolatexto);

    const precoDoFilme = document.createElement("p");
    precoDoFilme.innerText = `R$ ${filmes.price}`;
    sacolaDoFilme.appendChild(precoDoFilme);

    filme.style.background = `url(${filmes.poster_path})`;
    filme.style.backgroundSize = "100% 100%";

    //evento de botão
    sacolaDoFilme.addEventListener("click", () => {
        const sacolaVazia = document.querySelector(".sacolaVazia");
        sacolaVazia.setAttribute("hidden", "");
        addFilmeNaSacola(filmes);
    });

    return filme;
};

const filmesGeral = (filmes) => {
    const filme = document.createElement("div");
    filme.classList.add("filme");
    divFilmes.appendChild(filme);

    const infoDeFilme = document.createElement("div");
    infoDeFilme.classList.add("infoDeFilme");
    filme.appendChild(infoDeFilme);

    const estrelinha = document.createElement("img");
    estrelinha.classList.add("estrelinha");
    estrelinha.style.background = "url('Star_2.png')";
    infoDeFilme.appendChild(estrelinha);

    const infoEspecifica = document.createElement("div");
    infoEspecifica.classList.add("infoEspecifica");
    infoDeFilme.appendChild(infoEspecifica);

    const nomes = document.createElement("div");
    nomes.classList.add("nomes");
    infoEspecifica.appendChild(nomes);

    const nomeDoFilme = document.createElement("p");
    nomeDoFilme.classList.add("nomeDoFilme");
    nomeDoFilme.innerText = `${filmes.title}`;
    nomes.appendChild(nomeDoFilme);

    const nota = document.createElement("div");
    nota.classList.add("nota");
    nomes.appendChild(nota);

    const estrelinha2 = document.createElement("img");
    estrelinha2.classList.add("estrelinha2");
    estrelinha2.style.background = "url('Star_1.png')";
    nota.appendChild(estrelinha2);

    const notaDoFilme = document.createElement("p");
    notaDoFilme.classList.add("notaDoFilme");
    notaDoFilme.innerText = `${filmes.vote_average}`;
    nota.appendChild(notaDoFilme);

    const sacolaDoFilme = document.createElement("button");
    sacolaDoFilme.classList.add("sacolaDoFilme");
    infoEspecifica.appendChild(sacolaDoFilme);

    const sacolatexto = document.createElement("p");
    sacolatexto.innerText = "Sacola";
    sacolaDoFilme.appendChild(sacolatexto);

    const precoDoFilme = document.createElement("p");
    precoDoFilme.innerText = `R$ ${filmes.price}`;
    sacolaDoFilme.appendChild(precoDoFilme);

    filme.style.background = `url(${filmes.poster_path})`;
    filme.style.backgroundSize = "100% 100%";

    //evento de botão
    sacolaDoFilme.addEventListener("click", () => {
        const sacolaVazia = document.querySelector(".sacolaVazia");
        sacolaVazia.setAttribute("hidden", "");
        addFilmeNaSacola(filmes);
    });

    return filme;
};

//criar filme na sacola
const addFilmeNaSacola = (filmes) => {
    const filmeSelecionado = document.createElement("div");
    filmeSelecionado.classList.add("filmeSelecionado");
    sacolaPrincipal.appendChild(filmeSelecionado);

    const infoDeFilmeSelecionado = document.createElement("div");
    infoDeFilmeSelecionado.classList.add("infoDeFilmeSelecionado");
    filmeSelecionado.appendChild(infoDeFilmeSelecionado);

    const posterDoFilmes = document.createElement("span");
    posterDoFilmes.classList.add("posterDoFilmes");
    posterDoFilmes.style.background = `url(${filmes.poster_path})`;
    posterDoFilmes.backgroundSize = "contains";
    posterDoFilmes.style.backgroundRepeat = "no-repeat";
    posterDoFilmes.style.backgroundPosition = "center";
    infoDeFilmeSelecionado.appendChild(posterDoFilmes);

    const detalhesDoFilme = document.createElement("div");
    detalhesDoFilme.classList.add("detalhesDoFilme");
    infoDeFilmeSelecionado.appendChild(detalhesDoFilme);

    const nomeDoFilmeSelecionado = document.createElement("p");
    nomeDoFilmeSelecionado.classList.add("nomeDoFilmeSelecionado");
    nomeDoFilmeSelecionado.innerText = `${filmes.title}`;
    detalhesDoFilme.appendChild(nomeDoFilmeSelecionado);

    const precoDoFilmeSelecionado = document.createElement("p");
    precoDoFilmeSelecionado.classList.add("precoDoFilmeSelecionado");
    precoDoFilmeSelecionado.innerText = `R$ ${filmes.price}`;
    detalhesDoFilme.appendChild(precoDoFilmeSelecionado);

    //
    const adicionarItens = document.createElement("div");
    adicionarItens.classList.add("adicionarItens");
    filmeSelecionado.appendChild(adicionarItens);

    const adicionar = document.createElement("button");
    adicionar.classList.add("adicionar");
    adicionar.innerText = "+";
    adicionarItens.appendChild(adicionar);

    //botão de adicionar filme
    let qtdFilme = 1;
    adicionar.addEventListener("click", () => {
        qtdFilme += 1;
        quantidade.innerText = `${qtdFilme}`;
    });

    const quantidade = document.createElement("p");
    quantidade.classList.add("quantidade");
    quantidade.innerText = "1";
    adicionarItens.appendChild(quantidade);

    const remover = document.createElement("button");
    remover.classList.add("remover");
    remover.innerText = "-";
    adicionarItens.appendChild(remover);

    //botão de adicionar filme
    remover.addEventListener("click", () => {
        qtdFilme -= 1;
        quantidade.innerText = `${qtdFilme}`;
        if (Number(quantidade.innerText) === 0) {
            filmeSelecionado.remove();
            if (!filmeSelecionado) {
                sacolaVazia.toggleAttribute("hidden");
            }
        }
    });
};

//filmes na pagina principal
let precoConfirmar = document.querySelector(".precoConfirmar");
let sacolaVazia = document.querySelector(".sacolaVazia");
let sacolaPrincipal = document.querySelector(".sacolaPrincipal");
let divFilmes = document.querySelector(".filmes");
let divFilmes2 = document.querySelector(".listaFilmes2 .filmes");
fetch(
        "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
    )
    .then((resposta) => resposta.json())
    .then((respostaJson) => {
        for (let i = 0; i < 5; i++) {
            let filme = topFilmes(respostaJson.results[i]);
            divFilmes.append(filme);
        }
        for (let i = 0; i < 20; i++) {
            let filme = filmesGeral(respostaJson.results[i]);
            divFilmes2.append(filme);
        }
    });

const fetchGenero = (url) => {
    fetch(url)
        .then((resposta) => resposta.json())
        .then((respostaJson) => {
            let divFilmes2 = document.querySelector(".listaFilmes2 .filmes");
            let listaFilmes2 = document.querySelector(".listaFilmes2");
            divFilmes2.remove();

            for (let i = 0; i < 5; i++) {
                const filmes = document.createElement("div");
                filmes.classList.add("filmes");

                for (let j = 0; j < 20; j++) {
                    let filme = filmesGeral(respostaJson.results[i + j]);
                    filmes.append(filme);
                }
                listaFilmes2.append(filmes);
            }
        });
};

//botões de gênero do filme
const botoesGenero = document.querySelectorAll(".botoesDosGenero");
for (const botao of botoesGenero) {
    botao.addEventListener("click", (event) => {
        if (botao.classList.contains("clicked")) {
            botao.classList.remove("clicked");
        }

        const clicado = event.target;
        if (clicado.innerText === "Todos") {
            fetchGenero(
                `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR`
            );
        } else if (clicado.innerText === "Ação") {
            fetchGenero(
                `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=28&language=pt-BR`
            );
        } else if (clicado.innerText === "Romance") {
            fetchGenero(
                `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=10749&language=pt-BR`
            );
        } else if (clicado.innerText === "Ficção Científica") {
            fetchGenero(
                `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=878&language=pt-BR`
            );
        } else if (clicado.innerText === "Terror") {
            fetchGenero(
                `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=27&language=pt-BR`
            );
        }
    });
}

//botão confirmar compra

/*btCompra.addEventListener("click", () => {

})*/

//banner contador
const temporizador = document.querySelector(".tempoDoCupom");
const banner = document.querySelector(".bannerDeCupom");
let segundos = 59;
let minutos = 4;

const contador = () => {
    temporizador.innerText = `00:0${minutos}:${segundos}`;
    segundos--;
    if (segundos === 0) {
        minutos--;
        segundos = 59;

        if (minutos === -1) {
            banner.style.display = "none";
            clearInterval(tempo);
        }
    }
};

let tempo = setInterval(contador, 1000);

// adicionar cupom clicando no banner
banner.addEventListener("click", () => {
    clearInterval(tempo);
    const cupomPreenchido = document.querySelector(".inserirCupom input");
    const cupom = document.querySelector(".textoCupom");

    cupomPreenchido.value = cupom.innerText;
    banner.style.display = "none";
});