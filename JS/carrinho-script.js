document.addEventListener("DOMContentLoaded", () => {
    const chaveCarrinho = 'aurea_carrinho';
    const tbody = document.getElementById('itens-tabela');
    const divVazia = document.getElementById('lista-vazia');
    const divConteudo = document.getElementById('conteudo-carrinho');
    const displayTotal = document.getElementById('total-final');

    function renderizarPaginaCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
        tbody.innerHTML = '';
        let valorTotal = 0;

        if (carrinho.length === 0) {
            divVazia.style.display = 'block';
            divConteudo.style.display = 'none';
            return;
        }

        divVazia.style.display = 'none';
        divConteudo.style.display = 'block';

        carrinho.forEach((item, index) => {
            let precoLimpo = item.preco.replace('R$', '').replace(',', '.').trim();
            let precoNum = parseFloat(precoLimpo);
            if(isNaN(precoNum)) precoNum = 0;
            
            let subtotal = precoNum * item.quantidade;
            valorTotal += subtotal;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div class="produto-info-td">
                        <img src="${item.imagem}" alt="${item.nome}">
                        <span>${item.nome}</span>
                    </div>
                </td>
                <td>${item.preco}</td>
                <td>${item.quantidade}</td>
                <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                <td>
                    <button class="btn-lixeira" onclick="removerItem(${index})">🗑️</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        displayTotal.innerText = 'Total: R$ ' + valorTotal.toFixed(2).replace('.', ',');
    }

    window.removerItem = function(index) {
        let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];
        carrinho.splice(index, 1);
        localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
        renderizarPaginaCarrinho();
    };

    renderizarPaginaCarrinho();
});