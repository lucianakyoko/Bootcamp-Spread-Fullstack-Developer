# VARIÁVEIS E TIPOS
## Variáveis:
Atribuição de valores:
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

## Constantes
* Declarada em SNAKE_UPPER_CASE
* Escopo de bloco
* Não faz hoisting

## let, var e const

| --- | var | const | let |
| --- | --- | --- | --- |
| ESCOPO | GLOBAL OU LOCAL | BLOCO | BLOCO |
| redeclarar | sim | não |  não |
| reatribuir | sim | não | sim |
| hoisting | sim | não | não |