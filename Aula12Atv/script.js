 
const objeto = document.getElementById('objeto');
const array2 = document.getElementById('array2');
const result = document.getElementById('result');

        
objeto.addEventListener('click', () => {

    const pessoa = { 
        name: 'BERJU' ,

        idade: 17 };

    const contato = { 
        Fone: '41-9810-0910'
    };
    const junção = { ...pessoa, ...contato };
    result.textContent = `Em objeto : ${JSON.stringify(junção)}`;
});
array2.addEventListener('click', () => {
    const numeros = [1, 2, 3];
    const numeros2 = [4, 5, 6];        
    const combinação = [...numeros, ...numeros2];
    result.textContent = `Array junto: [${combinação.join(', ')}]`;
});