console.log("Olá Mundo")
console.log(2 + 2)
console.log(2 * 2)
console.log(10 / 2)
console.log(10 - 8)
console.log(10 * 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - 3 / 4.5)
console.log(4 + 4 + 4 + 4 / 4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)

/* comentario de varias linhas*/

//comentario de uma linha

// console.log ( comentario no console F12)

/* variáveis ( é uma memoria aonde voce guarda 
    e depois pode utlizar ela) */

/* variavel é um espaço reservado na memoria
para armazenar um valor
- toda variável tem um nome e um tipo
-a variável deve ter um nome
significativo, exemplo:
-uma variável que vai armazenar a
informação  idade pode ter o nome de 
IDADE, uma variável que vai armazenar o preço de venda
de um produto pode ter o nome PRECOVENDA especiais, sem acento,
sem espaço e lembrando que o javascript difrencia maiúscula de minúsculas
isso significa que PrecoVenda é diferente de precovenda */


//var nome
let nome = 'mateus'
let idade = 22
let nota1 = 7.5
let fumante = false
//nome

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)


/* Tipos */
console.log(typeof nome) // 'guto' é string
console.log(typeof idade) //36 é number
console.log(typeof nota1) // 7.5 é number
console.log(typeof fumante) // false é
Boolean

let veiculos = ['carros', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)

let cliente = {
    nome: 'Mateus',
    idade: 22
}
console.log(cliente)
console.log(typeof cliente)

let salvar = function () {

}
console.log(typeof salvar)

/* operadores relacionnais */
console.log(10 > 3) //maior
console.log(5 < 3) //menor
console.log(15 >= 10) //maior ou igual
console.log(15 <= 10) //menor ou igual
console.log(10 == 10) // igual
console.log(10 != 10) //diferente

/* Operadores logocos */
console.log('=========')
console.log(10 > 3 && 10 > 15) // Operador E ( AND) - Com operador e todas as expressões devem ser verdadeiras para o resultado ser verdadeiro

console.log(10 > 3 || 10 > 15 || 10 > 8) // Operador OU (OR) - com operador OU apenas uma expressão precisa ser verdadeira para o resultado ser verdadeiro

console.log(!10 > 3) // Operador NÃO (NOT) - o operador NOT inverte o resultado da expressão, se for verdadeiro ele inverte para falso e se for falso ele inverte para verdairo

//alert("Olá Mundo")
//document.write("<h3>Olá Mundo</h3>")


function Rosa() {
    //inserir um valor em um elemento da página
    document.getElementById('titulo').
        innerHTML = 'Aula 02 de JS'
    document.getElementById('texto').innerHTML = 'Vamos estudar interação com o DOM'

    document.body.style.backgroundColor = 'violet'
    document.body.style.color = 'white'

    document.getElementById('titulo').style.color = 'yellow'


    //pegar um valor de um elemento da página


    let titulo = document.getElementById('titulo').innerHTML

    console.log(titulo)
}

function Laranja(){
   document.body.style.backgroundColor = 'orangered'
   document.body.style.color = 'lightblue'
}







