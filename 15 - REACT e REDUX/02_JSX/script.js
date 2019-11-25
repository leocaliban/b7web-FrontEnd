let element = <h1>Teste TAG</h1>;
ReactDOM.render(
    element,
    document.getElementById('app')
);

let nome = 'Jack Bauer';
let h1 = <h1>{nome}</h1>
ReactDOM.render(
    h1,
    document.getElementById('app2')
);

function exibirNome(nome, sobrenome) {
    return (
        <div>
            <h2>{nome}</h2>
            <p>{sobrenome}</p>
            <small>Cadastrado com sucesso!</small>
        </div>
    );
}

ReactDOM.render(
    exibirNome('Nina', 'Myers'),
    document.getElementById('app3')
);