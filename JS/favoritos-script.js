document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('lista-favoritos');
    const msgVazio = document.getElementById('msg-vazio');
    const chaveLocalStorage = 'aurea_favoritos';
    const iconCheio = 'IMG/icons/coracao_preenchido.png';

    const favoritos = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];

    if (favoritos.length === 0) {
        if(msgVazio) msgVazio.style.display = 'block';
        if(container) container.style.display = 'none';
        return;
    }

    favoritos.forEach(produto => {
        const cardHTML = `
            <div class="card-favorito-visual">
                <div class="imagem-container-fav">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="foto-fav">
                    <button class="btn-remove-fav" onclick="removerFavorito('${produto.nome}')" title="Remover dos favoritos">
                         <img src="${iconCheio}" alt="Remover">
                    </button>
                </div>
                
                <div class="linha-divisoria-fav"></div>
                
                <h3 class="nome-produto-fav">${produto.nome}</h3>
                
                <a href="${produto.link}" class="btn-saiba-mais-fav">SAIBA MAIS</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});

function removerFavorito(nomeProd) {
    const chaveLocalStorage = 'aurea_favoritos';
    let favoritos = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];
    
    favoritos = favoritos.filter(p => p.nome !== nomeProd);
    
    localStorage.setItem(chaveLocalStorage, JSON.stringify(favoritos));
    window.location.reload(); 
}