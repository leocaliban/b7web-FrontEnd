function addEndereco(endereco) {

    let { cidade , estado} = endereco;

    const novoEndereco = {
        cidade,
        estado,
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