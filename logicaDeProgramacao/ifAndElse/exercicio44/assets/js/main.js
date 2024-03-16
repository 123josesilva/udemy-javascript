const formulario = document.querySelector('.animated-form')

ouvinte()

function ouvinte() {

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        validaData();
    })
}




function validaData() {
    const inputs = document.querySelectorAll('.input-imc');

    let valoreVazios = false;
    let valoresNegativos = false;

    inputs.forEach((input) => {
        if (input.value === '') {
            valoreVazios = true;
            console.log('Valores vazios')
        } else if (input.value <= 0) {
            valoresNegativos = true;
            console.log('Valores negativo ou zerados');
        }else {
            calculaIMC();
        }
    })

}

function calculaIMC(){
    const peso = document.querySelector('#input-peso');
    const altura = document.querySelector('#input-altura');
    const test = document.querySelector('.input-imc')

    console.log('input:', test);
    // console.log('peso: ', peso.value);
    // console.log('altura: ', altura.value);

}
ouvinte()
