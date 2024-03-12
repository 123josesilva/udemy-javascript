const formulario = document.querySelector('form');

const pessoas = [];

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    let nome = document.querySelector('.input-name');
    let sobrenome = document.querySelector('.input-sobrenome');
    let idade = document.querySelector('.input-idade');
    let altura = document.querySelector('.input-altura');

    let objeto = {
        nome : nome.value,
        sobrenome : sobrenome.value,
        idade : idade.value,
        altura : altura.value,
    }

    pessoas.push(objeto);

    console.log(pessoas);
})
