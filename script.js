//incluir suas solucoes
//implemente as funcoes, conforme necessário

console.log("[log] script de funções carregado");


// exercicio 01 *****************************
// funcao soma 2 numeros. recebe 2 numeros e retorna a soma

function soma(a, b) {
    var result = a + b;
    return result;
}


// exercicio 02 *****************************
// calculo de imc (indice de massa corporal). 
//recebe peso e altura, e retorna o IMC

function imc(a, b) {
    var result = a / (b * b);
    return result;
}


// exercicio 03 *****************************
// maior entre dois numeros, ou "igual"
// recebe 2 numeros, e retorna o maior deles. caso
// sejam iguais, retorna "iguais" 

function maior(a, b) {
    var result;

    if (a > b) {
        result = a;
    } else {
        result = b;
    }

    if (a == b) {
        return "iguais";
    }

    return result;
}