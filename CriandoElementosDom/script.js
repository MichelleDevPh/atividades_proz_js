const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Loja de Eletrônicos';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.id = 'produto';
produto.innerHTML = `
    <h2 class="nome-produto">Smartphone Galaxy S23</h2>
    <img src="https://via.placeholder.com/200" alt="Galaxy S23">
    <p class="descricao">Smartphone Samsung Galaxy S23 com tela Dynamic AMOLED 2X de 6.1", câmera tripla de 50MP + 10MP + 12MP, 8GB RAM e 128GB de armazenamento.</p>
    <p class="preco">R$ 3.999,00</p>
    <span class="desconto">10% de desconto no pix</span>
`;

produto.style.border = '1px solid #ddd';
produto.style.padding = '20px';
produto.style.maxWidth = '300px';
produto.style.marginTop = '20px';
produto.style.borderRadius = '8px';

titulo.style.color = '#333';
titulo.style.textAlign = 'center';

document.body.appendChild(produto);