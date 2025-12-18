# 🌿 Áurea Cosméticos

> Projeto de Website para Farmácia de Manipulação Fictícia

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen) ![Tech](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JS-blue)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho em grupo de colegas para o curso de **Farmácia da Universidade Estadual de Maringá (UEM)**. O objetivo era criar uma empresa fictícia de manipulação de cosméticos, a **Áurea Cosméticos**.

O website serve como a interface digital desta empresa, apresentando produtos, permitindo a simulação de compras e o envio de receitas médicas. Embora seja um site estático (frontend), ele simula funcionalidades dinâmicas e persistência de dados para oferecer uma experiência de utilizador completa.

## 🚀 Funcionalidades Principais

O site foi construído com foco na experiência do utilizador, utilizando **JavaScript** para simular operações de backend:

* **🛒 Carrinho de Compras Funcional:**
    * Os produtos adicionados são salvos no `localStorage` do navegador.
    * O carrinho persiste mesmo se a página for recarregada.
    * Cálculo automático de subtotais e valor total.
    * Opção de remover itens individualmente.
* **❤️ Sistema de Favoritos:**
    * Os utilizadores podem marcar produtos como favoritos.
    * A lista de desejos é salva localmente e pode ser visualizada na página dedicada.
    * Indicação visual (ícone de coração preenchido) nos produtos já favoritados.
* **🔐 Simulação de Login e Cadastro:**
    * Interfaces de Login e Registo implementadas.
    * Validações básicas de formulário (ex: confirmação de senha, idade mínima).
    * *Nota: O sistema é visual; não há autenticação real em servidor.*
* **📝 Envio de Receitas:**
    * Formulário para envio de receitas médicas.
    * Integração simulada que redireciona os dados para o WhatsApp ou serviços de submissão de formulários.
* **📱 Design Responsivo:**
    * Layout adaptável para desktops e dispositivos móveis.
    * Menu de navegação e grids de produtos ajustáveis.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização personalizada, uso de variáveis, Flexbox e Grid Layout.
* **JavaScript (ES6+):** Lógica de manipulação do DOM e gestão do `localStorage`.

## 📂 Estrutura do Projeto

```text
aurea-cosmeticos/
├── CSS/                # Ficheiros de estilo (.css) e imagens de fundo
├── IMG/                # Imagens dos produtos, banners, ícones e logótipos
├── JS/                 # Scripts com a lógica do site (.js)
├── *.html              # Páginas do site (index, carrinho, produtos, etc.)
└── README.md           # Documentação do projeto
```
