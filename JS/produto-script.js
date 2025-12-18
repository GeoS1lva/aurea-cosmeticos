document.addEventListener("DOMContentLoaded", () => {
    const chaveFavoritos = 'aurea_favoritos';
    const chaveCarrinho = 'aurea_carrinho';
    const iconVazio = 'IMG/icons/coracao.png'; 
    const iconCheio = 'IMG/icons/coracao_preenchido.png'; 

    const btnFavorito = document.querySelector('.btn-favorito');
    const btnAdicionar = document.querySelector('.btn-adicionar');
    const btnMenos = document.querySelector('.qtd-btn:first-child');
    const btnMais = document.querySelector('.qtd-btn:last-child');
    const inputQtd = document.querySelector('.qtd-input');

    function getDadosProduto() {
        const container = document.querySelector('.produto-hero');
        let nomeProduto = container.getAttribute('data-nome');
        if (!nomeProduto) nomeProduto = container.querySelector('.produto-titulo').innerText;
        
        const precoTexto = container.querySelector('.preco-atual').innerText.trim();

        return {
            nomeOriginal: nomeProduto,
            nomeComparacao: nomeProduto.trim().toLowerCase(),
            imagem: container.querySelector('.produto-foto-principal').src,
            link: window.location.href,
            preco: precoTexto
        };
    }

    if (inputQtd && (inputQtd.value === "0" || inputQtd.value === "")) inputQtd.value = "1";

    if (btnMenos && btnMais && inputQtd) {
        btnMais.addEventListener('click', () => {
            inputQtd.value = parseInt(inputQtd.value) + 1;
        });
        btnMenos.addEventListener('click', () => {
            let valor = parseInt(inputQtd.value);
            if (valor > 1) inputQtd.value = valor - 1;
        });
    }

    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', (e) => {
            e.preventDefault();

            const produto = getDadosProduto();
            const quantidade = parseInt(inputQtd.value);
            let carrinhoAtual = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
            
            const index = carrinhoAtual.findIndex(p => p.nome === produto.nomeOriginal);

            if (index !== -1) {
                carrinhoAtual[index].quantidade += quantidade;
            } else {
                carrinhoAtual.push({
                    nome: produto.nomeOriginal,
                    imagem: produto.imagem,
                    preco: produto.preco,
                    quantidade: quantidade
                });
            }

            localStorage.setItem(chaveCarrinho, JSON.stringify(carrinhoAtual));

            if (typeof window.atualizarEAbrirCarrinho === "function") {
                window.atualizarEAbrirCarrinho();
            } else {
                console.error("Erro: O script do carrinho não foi carregado corretamente.");
                alert("Produto adicionado! Clique no carrinho para ver.");
            }
        });
    }

    if (btnFavorito) {
        function verificarStatusFavorito() {
            const favoritosSalvos = JSON.parse(localStorage.getItem(chaveFavoritos)) || [];
            const produtoAtual = getDadosProduto();
            const imgIcone = btnFavorito.querySelector('img');
            const existe = favoritosSalvos.find(prod => prod.nome.trim().toLowerCase() === produtoAtual.nomeComparacao);

            if (existe) {
                imgIcone.src = iconCheio;
                btnFavorito.classList.add('ativo');
            } else {
                imgIcone.src = iconVazio;
                btnFavorito.classList.remove('ativo');
            }
        }

        btnFavorito.addEventListener('click', (e) => {
            e.preventDefault();
            const produto = getDadosProduto();
            const imgIcone = btnFavorito.querySelector('img');
            let favoritosAtuais = JSON.parse(localStorage.getItem(chaveFavoritos)) || [];
            const index = favoritosAtuais.findIndex(p => p.nome.trim().toLowerCase() === produto.nomeComparacao);
            
            const objSalvar = { nome: produto.nomeOriginal, imagem: produto.imagem, link: produto.link };

            if (index === -1) {
                favoritosAtuais.push(objSalvar);
                imgIcone.src = iconCheio;
                btnFavorito.classList.add('ativo');
            } else {
                favoritosAtuais.splice(index, 1);
                imgIcone.src = iconVazio;
                btnFavorito.classList.remove('ativo');
            }
            localStorage.setItem(chaveFavoritos, JSON.stringify(favoritosAtuais));
        });
        verificarStatusFavorito();
    }
});