/* 01) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.*/

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

/* 03) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.*/

function calcularSalario(horasTrabalhadas, salarioPago){
    let calcularSalarioPago = horasTrabalhadas*salarioPago;
    return "Salário igual a " + "R$ " + calcularSalarioPago;
}

console.log(calcularSalario(150, 40.5))

/* 04) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

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

/* 06) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
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

function objetoParaArray(objeto){
    return Object.entries(objeto);

}
console.log(objetoParaArray({nome: "Maria", profissao: "Desenvolvedora de software"}));


/* 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares. */

function receberSomenteOsParesDeIndicesPares(arrayDeNumeros){
    const result = [];

    for(let i = 0; i <= arrayDeNumeros.length; i += 2){
        const numeroPar = arrayDeNumeros[i] % 2 == 0;

        if(numeroPar)
        result.push(arrayDeNumeros[i]);
        
    }
    return result   
}
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

/* 16) A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.*/

function checarAnoBissexto(ano){
    const divisivelPorQuatro = ano % 4 == 0;
    const divisivelPorCem = ano % 100 == 0;
    const divisivelPorQuatrocentos = ano % 400 == 0;
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos;


}
console.log(checarAnoBissexto(2100));

/* 17) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

function somarNumeros(numeros){
    let soma = 0;
    numeros.forEach(numero => soma += numero);
    return "A soma de todos os números é: "+ soma;

}
console.log(somarNumeros([10, 10, 10]))

/* 18) Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. 
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function despesasTotais(itens){
    var total = 0;
    for (let item of itens)
    total += item.preco;
    return 'O total das despesas é: ' + total;
    

}
console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}]));

/* 19) Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

function calcularMedia(numeros){
    //const quantidadeDeNumeros = numeros.length;
    let somaTotal = 0;
    for(numero of numeros) {
        somaTotal += numero
    }
    return 'A média simples é: ' + somaTotal / numeros.length;
}
console.log(calcularMedia([0, 10]));

/* 20) Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.*/

function areaDoTriangulo(base, altura){

    const calcularAreaDoTriagulo = (base * altura) / 2;

    return 'A área desse triângulo é de: ' + calcularAreaDoTriagulo.toFixed(2);

}
console.log(areaDoTriangulo(10, 15));

/* 21) Criar uma função que receba um array de números e retorne o menor número desse array*/

function menorNumero(numeros){

    let menor = numeros[0];

    for (let i in numeros){
        if (numeros[i] < menor){
            menor = numeros[i];
            
        }
    }
    return 'O menor número desse array é: ' + menor;

}
console.log(menorNumero([10, 5, 35, 65]));

/* 22)Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */

function funcaoDaSorte(numero){
    let numeroGerado= Math.floor(Math.random()*10 + 1);
    
    if(numero == numeroGerado){
        return "Parabéns! O número sorteado foi o: " + numeroGerado
    }else{
        return "Que pena! O número sorteado foi o: " + numeroGerado
    }
}
console.log(funcaoDaSorte(10))

/* 23) Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/
function contarPalavras(string){

    let quantidadeDePalavras = string.split(" ").length;
    return "A quantidade de palavras existentes na frase é: " +quantidadeDePalavras


}
console.log(contarPalavras("Só uma frase"))

/* 24) Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.*/

function contarCaractere(string, caractere){
    let quantidadeDeCaractere = 0;

    for(i = 0; i < string.length; i++){
        if(string[i] == caractere){
            quantidadeDeCaractere++
        }
    }
    return "A quantidade de cracteres contido na frase é: " +quantidadeDeCaractere
}
console.log(contarCaractere(" Deise Cristiane Silva", "i"))

/* 25) A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/

function buscarPalavrasSemelhantes(palavra, arrayDeStrings){
    const result = []

    for(let x of arrayDeStrings){
        if(x.includes(palavra)){
            result.push(x);
        }
    }
    return result
   
    
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))

/* 26) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.*/

function removerVogais(string){
    let consoantes = string.replace(/(a|e|i|o|u)/gi, '');
    return consoantes;

}
console.log(removerVogais("Cod3r"))

/* 27) Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir: */

function inverter(){

}

/* 28) Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function filtrarPorQuantidadeDeDigitos(){

}

/* 29) Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

function segundoMaior(){

}

/* 30) Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.*/

function recerberMelhorEstudante(objeto){
    let mediaAluno = 0;
    let somaNotas = 0;

    for(let atributo of objeto){
        somaNotas += atributo.nota;
        mediaAluno = somaNotas/atributo.nota.length;
    }
    return atributo.nome, mediaAluno;
    
}
console.log(recerberMelhorEstudante({ Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9] }))