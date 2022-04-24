import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao>= [];
    // alternate
    // private negociacoes: Negociacao[]= [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    public lista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];
    }
    // alternate
    // lista(): readonly Negociacao [] {
    //     return [...this.negociacoes];
    // }
}

const negociacoes = new Negociacoes();
