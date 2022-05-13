# Aula 1 - Tipos de funções
## Estrutura
Definção comum de uma função

```
function nomeDaFuncao(parametros) {
  //instruções
  return; //valor de retorno
}
```

* variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
* Quando invocamos o 'return', a função para de ser executada

## Função anônima:
Funções que representam expressões

```
const soma = (a, b) => {
  return a + b;
};

soma(1, 2); //3
soma(5, 4); //9
```

* Uma variável pode armazenar uma função

## Função autoinvocável:
IIFE (Immediately Invoked Function Expression)

```
(
  function() {
    let name = 'Digital Innovation One;
    return name;
  };
)();
```

```
(
  function(a, b) {
    return a + b;
  }
)(1, 2);

// 3
```

```
const soma3 = (
  function() {
    return a + b;
  }
)(1,2);

console.log(soma3); //3
```

* Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada

## Callbacks:
É uma função passada como argumento para outra função.

```
const calc = function(operacao, num1, num2) {
  return operacao(num1, num2);
};

const soma = function(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

const resultado = calc(soma, 1, 2);
const resultado2 = calc(sub, 1, 2);

console.log(resultado, resultado2);

```


# Aula 2 - Parâmetros
## Valores padrão

``` 
function exponencial(array, num =1){
  const result = [];

  for(let i = 0; i < array.length, i++){
    result.push(array[i] ** num);
  };

  return result;
}

exponencial([1, 2, 3, 4]) // [1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64]

```
## Objeto "arguments"
Um array com todos os parâmetros passados quando a função foi invocada

```
function findMax() {
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

findeMax(1, 2, 3, 6, 90, 1) //90
```

## Array e Objetos
Spread: uma forma de lidar separadamente com elementos
O que era parte de um array, se torna um elemento separadamente.

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers))
```

Rest: combina os argumentos em um array
O que era um elemento se torna parte de um array.

```
function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(3, 4, 5) //3
```

## Objetos:
Object Destructuring: Entre chaves {} podemos filtrar apenas os dados que interessam em um objeto.
```
const user = {
  id: 42,
  dispayName: 'jdoe',
  fullName: {
    firstName: 'John,
    lastName: 'Doe'
  }
}

function userId({id}) {
  return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
  return `${first} ${last}`
}

userId(user) //42

getFullName(user) //John Doe
```










# Aula 3 - Loops
# Aula 4 - This
# Aula 5 -  Arrow Functions
# Aula 6 - 

