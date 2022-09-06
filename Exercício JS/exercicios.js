/*
=======Aula 1=========
Variaveis:

let nome = "Guilherme"; // String literal
let idade = 18; // Number literal
let estuda = true; // Boolean
let sobrenome = undefined; // Undefined
let cor = null // Redefinir valor

typeof <variavel> -> verifica o tipo da variável

let pessoa = {
  nome: "Guilherme",
  idade: 18,
  estuda: true,
  sobrenome: undefined,
  cor: null
};

console.log(pessoa);

========Aula 2========
Arrays:

let familia = [18,"Guilherme",true,1192];

console.log(familia.length)
console.log(familia[1]);

========Aula 3==========
Funções:

//Verbo + substantivo

let nomeCompleto = "Guilherme";

function todoNome(nome, sobrenome){
  nomeCompleto = nome + sobrenome;
}

console.log(nomeCompleto);
todoNome("Guilherme" , " Nunes");
console.log(nomeCompleto);

========Aula 4==========
Tipos de Funções:

//Realiza tarefa, não devolve nada
function dizerNome(){
  console.log("Guilherme");
}

dizerNome();

//Faz um cálculo ou operação e retorna algo
function multiplica2(valor){
  return valor * 2;
}

console.log(multiplica2(9));

let resultado = multiplica2(5);
console.log(resultado);

========Aula 5==========
Operadores JS

//Operadores Aritiméticos(metemáticos)
let salario = 5;

// + , - , * , / , **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// ++ , -- 
//Operadores de incremento

let idade = 18;

console.log(++idade);
console.log(--idade);

//Operadores Atribuição

let valorTeclado = 100;

// valorTeclado = valorTeclado + valorTeclado
valorTeclado += valorTeclado;

// valorTeclado = valorTeclado - valorTeclado
valorTeclado -= valorTeclado;

console.log(valorTeclado);

//Operadores de Comparação

-> Igualdade Estrita
console.log(1 === 1);
console.log("1" === 1);

-> Igualdade Solta
console.log( 1 == 1);
console.log("1" == 1);

-> Operador Ternário (É TIPO UM IF)
//Tem um cliente, 100pts = premium, comum
let pontos = 100;
let tipo = pontos >= 100 ? "premium" : "comum";

console.log(tipo);

//Operadores Lógicos

-> Operador Lógico 'E' (&&)
Retorna TRUE se os dois operandos forem TRUE

console.log(true && true); // Retorna TRUE

console.log(true && false); // Retorna FALSE

Exemplo:
let maiorIdade = true;
let possuiCarteiraTrabalho = true;
let podeAplicar = maiorIdade && possuiCarteiraTrabalhoalho;

console.log(podeAplicar);

-> Operador Lógico 'OU' (||)
Retorna TRUE se um dos operandos forem TRUE

console.log(true && true); // Retorna TRUE

console.log(true && false); // Retorna TRUE

Exemplo:
let maiorIdade = true;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorIdade || possuiCarteiraTrabalhoalho;

console.log(podeAplicar);

-> Operador Lógico 'NOT' (!)

let maiorIdade = true;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorIdade || possuiCarteiraTrabalho;

let candidatoRecusado = !podeAplicar;

console.log(podeAplicar);

//Falsy
undefined
null 
0
false
''
NaN - Not a Number

//Truthy
-> Tudo que não é Falsy


=======Mini Projeto 1=====

//mini projeto - trocar valores de variaveis

let a = 'vermelho';
let b = 'azul';

let c = a; // C recebe valor de A e guarda
a = b; // A recebe valor de B sendo seu novo valor
b = c; // B recebe o valor de C que era o valor de A

console.log(a);
console.log(b);

*/



