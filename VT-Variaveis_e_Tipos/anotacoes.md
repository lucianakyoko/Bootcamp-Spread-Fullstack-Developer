# VARIÁVEIS E TIPOS
## Variáveis:
### Aula 01 - Atribuição de valores:
* Original Varible as String (some awesome var)
* Camel Case (someAwesomeVar)
* SnakeCase (some_awesome_var)
* Kebab Case (some-awesome-var)
* Pascal Case (SomeAwesomeVar)
* Upper Case Snake Case (SOME_AWESOME_VAR)

```
var a = 1;
var b = 2;

if(a === 1) {
  var a = 11; //the scope is global
  let b = 22; //the scope is inside the if-block

  console.log(a) //11
  console.log(b) //22
};

console.log(a) //11
console.log(b) //2
```

-> Var e Let tem escopos diferentes
-> Reatribuição
-> camelCase

acontece apenas com Var:
* Hoisting (atribuição de uma variável antes de declarar ela)
* Redeclaração

Exemplo de hoisting com var:

```
numberOne = 1;
console.log(numberOne + 2); //3
var numberOne;
```

Exemplo de hoisting com let:
```
numberOne = 1;
console.log(numberOne + 2); //Cannot access 'numberOne' before initialization
let numberOne;
```
```
let numberOne;
numberOne = 1;
console.log(numberOne + 2); //3
```

#### Constantes
* Declarada em SNAKE_UPPER_CASE
* Escopo de bloco
* Não faz hoisting

#### let, var e const

| --- | var | const | let |
| --- | --- | --- | --- |
| ESCOPO | GLOBAL OU LOCAL | BLOCO | BLOCO |
| redeclarar | sim | não |  não |
| reatribuir | sim | não | sim |
| hoisting | sim | não | não |


### Tipos:
#### Estrutura de dados
JavaScript é uma linguagem de tipagem dinâmica.
Isso significa que, antes de declarar um valor, não se especifica o tipo desta variavel

Os tipos primitivos não possuem métodos guardados dentro deles:
* numbers
* strings
* boolean
* null
* undefined

Não primitivos:
* objects
* arrays

#### Strings
* Comumente utilizada para textos
* Valores declarados entre aspas ou crases

Métodos importantes:
* Concatenação
* Propriedade length
* Iterabilidade
* Formatação

#### Numbers
* Numeros inteiros e decimais
* É declarado sem aspas

#### Booleans
* true
* false

#### Arrays
* Lista iterável de elementos

#### Objetos
* estrutura do tipo chave e valor

#### Empty, undefined e null
* retorna como false
* empty = A variável foi declarada e o valor da variável é:
  * numero 0
  * string vazia = ''
  * array vazia = []
  * objeto vazio = {}

* null = quando se deseja, propositalmente, que o valor não exista

* undefined = valor indefinido

# Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1