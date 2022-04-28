export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando protype ${target.constructor.name}
            e adicionando o getter para a propriedade ${propertyKey}`)
            
        let elemento: HTMLInputElement;
        const getter = function(){
            if(!elemento){
                elemento = <HTMLInputElement>document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com seletor ${seletor}
                para injetar em ${propertyKey}`);
            }
            return elemento
        }
        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );
    }
}