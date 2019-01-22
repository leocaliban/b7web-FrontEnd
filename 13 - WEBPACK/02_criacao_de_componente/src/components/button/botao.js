import './style.css'

class Botao {

    constructor() {
        this.render.title = '';
        this.callback = () => { };
    }

    setTitle(t) {
        this.title = t;
    }

    setClick(f) {
        this.callback = f;
    }

    render() {
        let b = document.createElement('button');
        b.classList.add('botao');
        b.innerHTML = this.title;
        b.addEventListener('click', this.callback);
        return b;

        //return `<button class="botao" onclick="">` + this.title + `</button>`;
    }
}

export default Botao;