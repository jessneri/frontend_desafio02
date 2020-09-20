//fetch com lista de filmes
const elementoFilmes = document.querySelectorAll(".infoDeFilme");
const elementoFilmesGerais = document.querySelectorAll(".infoDeFilme2");

const topFilmes = (filme, i) => {
    const elementoFilme = elementoFilmes[i];
    const nomeDoFilme = elementoFilme.querySelector(".nomeDoFilme");
    const notaDoFilme = elementoFilme.querySelector(".notaDoFilme");
    const precoDoFilme = elementoFilme.querySelector(".precoDoFilme");

    nomeDoFilme.innerText = `${filme.title}`
    notaDoFilme.innerText = `${filme.vote_average}`
    precoDoFilme.innerText = `${filme.price}`
    elementoFilme.style.background = `url(${filme.poster_path})`;
    elementoFilme.style.backgroundSize = "100% 100%";
}
const filmesGeral = (filme, i) => {
    const elementoFilmeGeral = elementoFilmesGerais[i];
    const nomeDoFilme = elementoFilmeGeral.querySelector(".nomeDoFilme");
    const notaDoFilme = elementoFilmeGeral.querySelector(".notaDoFilme");
    const precoDoFilme = elementoFilmeGeral.querySelector(".precoDoFilme");

    nomeDoFilme.innerText = `${filme.title}`
    notaDoFilme.innerText = `${filme.vote_average}`
    precoDoFilme.innerText = `${filme.price}`
    elementoFilmeGeral.style.background = `url(${filme.poster_path})`;
    elementoFilmeGeral.style.backgroundSize = "100% 100%";
}


fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    .then(resposta => resposta.json())
    .then(respostaJson => {

        for (let i = 0; i < elementoFilmes.length; i++) {
            const filme = topFilmes(respostaJson.results[i], i);
        }

    })


fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    .then(resposta => resposta.json())
    .then(respostaJson => {

        for (let i = 0; i < elementoFilmesGerais.length; i++) {
            const filme = filmesGeral(respostaJson.results[i], i);
        }
        adicionarSacola();

    })

//botão de compra do filme

const btSacolaDoFilme = document.querySelectorAll(".sacolaDoFilme");

const adicionarSacola = () => {
    btSacolaDoFilme.forEach(bt => {
        bt[i].addEventListener("click", () => {
            sacolaGeral.toggleAttribute("hidden"); //tirar duvidas quanto ao botão
        })
    })
}




//botões com gêneros de filmes
/*const btTodos = document.querySelector(".btTodos");
const btAcao = document.querySelector(".btAcao");
const btRomance = document.querySelector(".btRomance");
const btFiccao = document.querySelector(".btFiccao");
const btTerror = document.querySelector(".btTerror");

const filmesAcao = (filme, i) => {
    const elementoFilmesAcao = elementoFilmesAcao[i];
    const nomeDoFilme = elementoFilmeGeral.querySelector(".nomeDoFilme");
    const notaDoFilme = elementoFilmeGeral.querySelector(".notaDoFilme");
    const precoDoFilme = elementoFilmeGeral.querySelector(".precoDoFilme");

    nomeDoFilme.innerText = `${filme.title}`
    notaDoFilme.innerText = `${filme.vote_average}`
    precoDoFilme.innerText = `${filme.price}`
    elementoFilmeGeral.style.background = `url(${filme.poster_path})`;
    elementoFilmeGeral.style.backgroundSize = "100% 100%";
}*/


//banner contador

const temporizador = document.querySelector(".tempoDoCupom");
const banner = document.querySelector(".bannerDeCupom");
let segundos = 10;
let minutos = 0;



const contador = () => {
    temporizador.innerText = `00:0${minutos}:${segundos}`;
    segundos--;
    if (segundos === 0) {
        minutos--;
        segundos = 59
        if (minutos === -1) {
            banner.style.display = "none";
            clearInterval(tempo)
        }
    }
}

let tempo = setInterval(contador, 1000)