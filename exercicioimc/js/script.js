// alert('JS carregado');

// Selecionando um elemento do HTML e guardando ele em uma variável
var btn = document.querySelector('#btn');
var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var msgResult = document.querySelector('.result');
var msgImc = document.querySelector('#msgImc');

// Criando a função de calcularCombustível

function calcularImc(){
    
    // console.log(altura.value);
    // console.log(peso.value);
    // Se o valor da altura e o valor do peso forem diferentes de vazio
    if (altura.value != '' && peso.value != '') {

        msgResult.style.visibility = 'visible';
        
        // Calculo => peso / (altura x altura)
        
        var resultado = peso.value / (altura.value * altura.value);

        msgImc.innerHTML = resultado;

        if(resultado < 18.5){
            alert('Magreza'); 
            
        }
        else if(resultado <= 24.9){
            alert('Normal');  
        }
        else if(resultado <= 29.9){
            alert('Sobrepeso');
        }
        else{
            alert('Obesidade');
        }

    }
    
    // senão
    else{
        alert('Preença os campos!');
    }
}

// Monitorando o btn
// Quando o clique ocorrer, a função calcularCombustivel será acionada
btn.addEventListener('click', calcularImc);