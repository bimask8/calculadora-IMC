const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome && altura > 0 && peso > 0) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        if (!nome) {
            resultado.textContent = 'Por favor, preencha o nome.';
        } else if (isNaN(altura) || altura <= 0) {
            resultado.textContent = 'Por favor, insira uma altura válida.';
        } else if (isNaN(peso) || peso <= 0) {
            resultado.textContent = 'Por favor, insira um peso válido.';
        }
    }
}

calcular.addEventListener('click', imc);
