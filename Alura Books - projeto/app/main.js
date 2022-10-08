let livros = [];

const endpointDaApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`;

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi () {
    const resposta = await fetch(endpointDaApi);
    livros  = await resposta.json();
    let livrosComDescontos = aplicarDescontos(livros)
    exibirOsLivros(livrosComDescontos);
}
