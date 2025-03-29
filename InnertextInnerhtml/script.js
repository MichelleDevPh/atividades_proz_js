const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Manipulação do DOM com JavaScript';
link.innerText = 'Visite o site da Proz Educação';

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.github.com">GitHub</a></li>
    <li><a href="https://www.linkedin.com">LinkedIn</a></li>
`;