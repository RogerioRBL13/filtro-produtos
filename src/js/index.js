import { products } from "./lista-de-produtos.js";

document.addEventListener("DOMContentLoaded", () => {
let allProducts = `
    <section class="area-produtos">
        <ul class="lista-produtos">
`;

products.forEach(product => {
  allProducts += `
                <li class="produtos" data-camiseta="dataCamiseta" data-caneca="dataCaneca">
                    <img src="${product.image}" alt="${product.name}">

                    <div class="informacoes">
                        <h3>${product.name}</h3>
                        <span>Tamanho: ${product.size}</span>
                        <span>Cor: ${product.color}</span>
                        <span class="preco">Preço: R$ ${product.price},00</span>
                        <button class="btn-comprar">Comprar</button>
                    </div>
                </li>
  `;
});

document.querySelector('.filtros').insertAdjacentHTML('afterend', allProducts);
});


//Filtrando Produtos

// document.addEventListener("DOMContentLoaded", () => {
//   mostrarProdutosNatela(products); 
// });

//Busca os elementos na tela: botão 'Buscar', input e select
const botaoBuscarProdutosSelecionados = document.querySelector(".btn-buscar-produtos");
botaoBuscarProdutosSelecionados.addEventListener("click", () =>{
    const inputBuscarProduto = document.querySelector("#buscar-produto").value.toLowerCase();
    const selectSelecionarProduto = document.querySelector("#tipo-de-produto").value.toLowerCase();


    const produtosFiltrados = products.filter(itenDaLoja => {
    const nome = itenDaLoja.name.toLowerCase();
    const tipoPorCategoria = itenDaLoja.category.toLowerCase();
    
    const buscaPorNome = inputBuscarProduto === "" || nome.includes(inputBuscarProduto);
    const buscaPorTipo = selectSelecionarProduto === "" || tipoPorCategoria === selectSelecionarProduto;

    return buscaPorNome && buscaPorTipo;
 });
});













