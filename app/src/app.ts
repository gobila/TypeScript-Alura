
import { Negociacaocontroller } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);

const controller = new Negociacaocontroller();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event=>{
        event.preventDefault();
        controller.adiciona();
    })
}else{
    throw Error('Não foi possével inicializar a aplicação. Verifique se o form foi criado')
}

const botaoImporta = document.querySelector('#botao-importa');

if(botaoImporta){
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    })
}else{
    throw Error('botão importa não foi encontrado')
}