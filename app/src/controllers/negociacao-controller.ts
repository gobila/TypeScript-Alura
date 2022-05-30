import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/ispect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { Imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class Negociacaocontroller{
    // passando explicitamente o tipo null para suprimir o strictNullChecks
    // HTMLInputElement pode retornar null caso nao exita o seletor
    @domInjector('#data')
    private inputData : HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade : HTMLInputElement;
    @domInjector('#valor')
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negocioacoesService = new NegociacoesService()

    constructor(){
        /*
            // dizendo o retorno vai ser HTMLInputElement "garantindo" que nao é null
            // fazendo casting explicito
            this.inputData = document.querySelector("#data") as HTMLInputElement;
            // forma alternativa
            this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
            this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        */
        this.negociacoesView.update(this.negociacoes); 
    }
// ADICIONA
    @logarTempoDeExecucao()
    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        if(!this.ehDiaUtil(negociacao.data)){
            return this.mensagemView.update('Apenas negociações em dias Úteis são aceitas');
        }
        this.negociacoes.adiciona(negociacao);

        Imprimir(negociacao, this.negociacoes);

        this.limparFormulario();
        this.atualizaView();
    }
// IMPORTA DADOS
    importaDados():void{
        this.negocioacoesService.obterNegociacoes()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter( negociacoesDeHoje => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao.ehIgual(negociacoesDeHoje) );
                });
            })
            .then(negociacoesDeHoje => {
                for( let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao)
                };
                this.negociacoesView.update(this.negociacoes)
            });
    }
//  EH DIA UTIL
    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
// LIMPAR FORMULARIO
    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
// ATUALIZA VIEW
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso')
    }

}