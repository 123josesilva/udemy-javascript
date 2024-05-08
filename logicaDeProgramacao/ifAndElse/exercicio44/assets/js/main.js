const formulario = document.querySelector('.animated-form')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    validaData();
})




function validaData() {
    const inputs = document.querySelectorAll('.input-imc');

    let valoresVazios = false;
    let valoresNegativos = false;

    inputs.forEach((input) => {
        if (input.value === '') {
            valoresVazios = true;      
        } else if (input.value <= 0) {
            valoresNegativos = true;
        }
    })

    if (valoresVazios === true) {
        console.log('valore Vazios');
    }else if(valoresNegativos === true){
        console.log('valoresNegativos');
    }else{
        calculaIMC() 
    }

}

function calculaIMC(){
    const peso = document.querySelector('#input-peso');
    const altura = document.querySelector('#input-altura');

    calculo(peso.value, altura.value)
    
    function calculo(peso, altura){
       let x = parseFloat(peso);
       let y = parseFloat(altura);
      
        resultado = x / (y * y); 

        return resultado;
    }

    if(resultado <= 18.4){
        console.log('Muito abaixo do peso');
    } else if(resultado ){

    }
}

