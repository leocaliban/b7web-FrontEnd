function addEndereco(endereco) {
    const novoEndereco = {
        cidade: endereco.cidade,
        estado: endereco.estado,
        pais: 'Brasil'
    };

    console.log(novoEndereco.cidade + ", " + novoEndereco.estado + ", " + novoEndereco.pais);
}

addEndereco(
    {
        cidade: 'Patos',
        estado: 'Paraíba'
    }
);