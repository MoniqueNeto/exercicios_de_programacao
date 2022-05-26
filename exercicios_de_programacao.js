/* 01) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function cumprimentar(nome){
    return " Olá " + nome + "!";
}

console.log(cumprimentar("Monique"));

/* 02) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/
function converterIdadeEmAnosParaDias(idade){
    let conversorIdadeParaDias = idade *365;
    return conversorIdadeParaDias;  

}
console.log(converterIdadeEmAnosParaDias(25));

/* 03) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

function calcularSalario(horasTrabalhadas, salarioPago){
    let calcularSalarioPago = horasTrabalhadas*salarioPago;
    return "Salário igual a " + "R$ " + calcularSalarioPago;
}

console.log(calcularSalario(150, 40.5))

/* 04) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function nomeDoMes(mes){
    if(mes == 1)
        console.log("Janeiro")
    else if (mes == 2)
        console.log("Fevereiro")
    else if (mes == 3)
        console.log("Março")
    else if(mes == 4)
        console.log("Abril")
    else if(mes == 5)
        console.log("Maio")
    else if(mes == 6)
        console.log("Junho")
    else if(mes == 7)
        console.log("Julho")
    else if(mes == 8)
        console.log("Agosto")
    else if(mes == 9)
        console.log("Setembro")
    else if(mes == 10)
        console.log("Outubro")
    else if(mes == 11)
        console.log("Novembro")
    else
        console.log("Dezembro")

}
console.log(nomeDoMes(4))

/* 05) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/

function maiorOuIgual(numero1, numero2){
    if(numero1 > numero2)
       console.log("O número " + numero1 + " é maior do que o " + numero2)
    else
        console.log("O número " + numero2 + " é maior do que o " + numero1)
}
console.log(maiorOuIgual(1, 12))

/* 06) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inversor(valor){
    if(typeof(valor) == "boolean"){
        if(valor == true)
            return false
        else
            return true
    }else if(typeof(valor) == "number"){
        let numeroInverso = (valor * -1)
        console.log(numeroInverso)
    }else{
        console.log("Booleano ou número esperados, mas o parâmetro é do tipo " + typeof(valor))
    }

}
console.log(inversor(12))

/* 07) Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.*/

/*function estaEntre(numero, minimo, maximo, inclusivo){
    if(numero > minimo && numero < maximo){
        if(inclusivo == true){

        }
    }else if(inclusivo == " "){
        if()
    }

}*/
function estaEntre(minimo, maximo, numero, inclusivo = false) {   

    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo 
}

console.log(estaEntre(3, 150, 3))

/* 08) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplicar(num1, num2){
    if(num1 >=0 && num2 >=0){
        for(let i = 0; i <= num2; i++){
            let multiplicacao = num1 *= num2;
            return multiplicacao;

        }
    }else{
        return "Número positivo não identificado!"
    }

}
console.log(multiplicar(-10, 5))

/* 09) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(numeroRepetido, numeroDeRepeticao){
    array = []
    for(let i=0; i< numeroDeRepeticao; i++) {
        array.push(numeroRepetido)
    }

    return array
}

console.log(repetir("codigo", 2))

/* 10) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro. */

function simboloMais(numeroDeSimbolo){
    let resultado = ''
    for(let i = 0; i < numeroDeSimbolo; i++)
        resultado += '+';
        return resultado;   
         
}
console.log(simboloMais(4))

/* 11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
*/

function receberPrimeiroEUltimoElemento(array){
    const novoArray = []
    
    let primeiroElemento = array[0]; 
    let ultimoElemento = array[array.length-1];

    novoArray.push(primeiroElemento)
    novoArray.push(ultimoElemento)
    return novoArray


}
console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))

/* 12) Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.*/

function removerPropriedade(objeto, propriedade){

    const copyObject = Object.assign({}, objeto)
    delete copyObject[propriedade]

    return copyObject
    
    
}
console.log(removerPropriedade({Nome:'Deise', CPF: '112.000.000-56'}, 'CPF'))

/*13) Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.*/

function filtrarNumeros(array2){
    const filterArray = []

    for(let elemento of array2)
        if(typeof elemento === "number")
            filterArray.push(elemento)
        
    return filterArray
            
}
console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]))

/* 14) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:
*/

function objetoParaArray(){

}


/* 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares. */

function receberSomenteOsParesDeIndicesPares(arrayDeNumeros){
    const result = [];

    for(let i = 0; i <= arrayDeNumeros.length; i += 2){
        const numeroPar = arrayDeNumeros[i] % 2 == 0

        if(numeroPar)
        result.push(arrayDeNumeros[i])
        
    }
    return result   
}
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
