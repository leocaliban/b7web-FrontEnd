// let element = <h1 style={{ color: '#888' }} className="titulo">Teste TAG</h1>;

let element = React.createElement(
    'h1',
    {
        className: 'titulo'
    },
    'Criado pelo React.createElement'
)
ReactDOM.render(
    element,
    document.getElementById('app')
);
