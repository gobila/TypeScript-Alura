import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao>= [];
    // alternate
    // private negociacoes: Negociacao[]= [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    lista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];
    }
    // alternate
    // lista(): readonly Negociacao [] {
    //     return [...this.negociacoes];
    // }
}

const negociacoes = new Negociacoes();
