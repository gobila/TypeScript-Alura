import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{

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

    public paraTexto(): string{
        return JSON.stringify(this.negociacoes, null, 2);
    }

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista())
    }
}

const negociacoes = new Negociacoes();
