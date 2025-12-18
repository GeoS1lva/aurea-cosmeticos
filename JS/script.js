const banners = [
    "IMG/banner/banner_propaganda_serum.png",
    "IMG/banner/Banner_Hidratante.png"
];

let indiceAtual = 0;

function mudarBanner(direcao) {
    indiceAtual += direcao;

    if (indiceAtual >= banners.length) {
        indiceAtual = 0;
    }

    if (indiceAtual < 0) {
        indiceAtual = banners.length - 1;
    }

    const imgBanner = document.getElementById('img-banner');
    imgBanner.src = banners[indiceAtual];
}

const cards = document.querySelectorAll('.cards-track .card-produto');
const btnVoltar = document.getElementById('btn-voltar-prod');
const btnAvancar = document.getElementById('btn-avancar-prod');

let cardAtual = 0;

function atualizarCarrossel() {
    cards.forEach(card => {
        card.classList.remove('active', 'card-esq', 'card-dir', 'hidden'); 
    });

    const total = cards.length;
    let prevIndex = (cardAtual - 1 + total) % total;
    let nextIndex = (cardAtual + 1) % total;

    cards[cardAtual].classList.add('active');
    cards[prevIndex].classList.add('card-esq');
    cards[nextIndex].classList.add('card-dir');

    cards.forEach((card, index) => {
        if (index !== cardAtual && index !== prevIndex && index !== nextIndex) {
            card.classList.add('hidden');
        }
    });
}

btnVoltar.addEventListener('click', () => {
    const total = cards.length;
    cardAtual = (cardAtual - 1 + total) % total;
    atualizarCarrossel();
});

btnAvancar.addEventListener('click', () => {
    const total = cards.length;
    cardAtual = (cardAtual + 1) % total;
    atualizarCarrossel();
});

atualizarCarrossel();

document.addEventListener("DOMContentLoaded", () => {
    const chaveLocalStorage = 'aurea_favoritos';
    const iconVazio = 'IMG/icons/coracao.png';
    const iconCheio = 'IMG/icons/coracao_preenchido.png'; 

    const botoesFavorito = document.querySelectorAll('.btn-favorito');

    function verificarFavoritos() {
        const favoritosSalvos = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];
        
        botoesFavorito.forEach(btn => {
            const card = btn.closest('.card-produto');
            const nomeProduto = card.querySelector('.nome-produto').innerText.trim();
            const imgIcone = btn.querySelector('img');

            const existe = favoritosSalvos.find(prod => 
                prod.nome.trim().toLowerCase() === nomeProduto.toLowerCase()
            );

            if (existe) {
                imgIcone.src = iconCheio;
                btn.classList.add('ativo');
            } else {
                imgIcone.src = iconVazio;
                btn.classList.remove('ativo');
            }
        });
    }

    botoesFavorito.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const card = btn.closest('.card-produto');
            
            const nomeCapturado = card.querySelector('.nome-produto').innerText.trim();
            
            const produto = {
                nome: nomeCapturado,
                imagem: card.querySelector('.foto-produto').src,
                link: card.querySelector('.saiba-mais').href
            };

            let favoritosAtuais = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];
            const imgIcone = btn.querySelector('img');

            const index = favoritosAtuais.findIndex(p => 
                p.nome.trim().toLowerCase() === nomeCapturado.toLowerCase()
            );

            if (index === -1) {
                favoritosAtuais.push(produto);
                imgIcone.src = iconCheio;
                btn.classList.add('ativo');
            } else {
                favoritosAtuais.splice(index, 1);
                imgIcone.src = iconVazio;
                btn.classList.remove('ativo');
            }

            localStorage.setItem(chaveLocalStorage, JSON.stringify(favoritosAtuais));
        });
    });

    verificarFavoritos();
});