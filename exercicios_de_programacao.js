/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function cumprimentar(nome){
    return " Olá " + nome + "!";
}

console.log(cumprimentar("Monique"));

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/
function converterIdadeEmAnosParaDias(idade){
    let conversorIdadeParaDias = idade *365;
    return conversorIdadeParaDias;  

}
console.log(converterIdadeEmAnosParaDias(25));

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

function calcularSalario(horasTrabalhadas, salarioPago){
    let calcularSalarioPago = horasTrabalhadas*salarioPago;
    return "Salário igual a " + "R$ " + calcularSalarioPago;
}

console.log(calcularSalario(150, 40.5))

/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
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

/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/

function maiorOuIgual(numero1, numero2){
    if(numero1 > numero2)
       console.log("O número " + numero1 + " é maior do que o " + numero2)
    else
        console.log("O número " + numero2 + " é maior do que o " + numero1)
}
console.log(maiorOuIgual(1, 12))

/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inversor(valor){
    if(typeof(valor) == "Boolean"){
        if(valor == true)
            return false
        else
            return true
    }else if(typeof(valor) == "Number"){
        let numeroInverso = (valor * -1)
        console.log(numeroInverso)
    }else{
        console.log("Booleano ou npumero esperados, mas o parâmetro é do tipo " + typeof(valor))
    }

}
console.log(inversor(true))