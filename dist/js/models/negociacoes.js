export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        // alternate
        // lista(): readonly Negociacao [] {
        //     return [...this.negociacoes];
        // }
    }
    // alternate
    // private negociacoes: Negociacao[]= [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
const negociacoes = new Negociacoes();
