export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name}
            e adicionando o getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com seletor ${seletor}
                para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
