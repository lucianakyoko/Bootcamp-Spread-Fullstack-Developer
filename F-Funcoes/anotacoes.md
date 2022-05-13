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
## If/ Else e Switch:
### If/Else:
```
function numeroPositivo(num) {
  let resultado;

  if(num < 0>) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

numeroPositivo(2) //true
numeroPositivo(-9) //false
```

condicional dentro de uma variável:

```
function numeroPositivo(num) {
  let resultado;
  const ehNegativo = num < 0;

  if(ehNegativo) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}
```

Nem sempre precisamos do else:
```
function numeroPositivo(num) {
  const ehNegativo = num < 0;

  if(ehNegativo) {
    resultado = false;
  } 

  return true;
```

O JavaScript não tem elseif, as palavras sempre estarão separadas

### Switch/case:
Equivale a uma comparação de tipo e valor (===)
Sempre precisa de um valor default
Ideal para quando se precisa comparar muitos valores

```
function getAnimal(id) {
  switch(id) {
    case 1: return 'cão';
    case 2: return 'gato';
    case 3: return 'pássaro';
    default: return 'peixe';
  }
}

getAnimal(1) //cão
getAnimal(4) //peixe
getAnimal("1") //peixe
```

## for e while
### for:
Loop dentro de elementos iteráveis (arrays, strings):

```
function multiplicaPorDois(arr) {
  let multiplicados = [];

  for(let i=0; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2);
  }
  return multiplicados;
}

const meus numeros = [2, 33, 456, 356, 40];
multiplicaPorDois(numeros) //[4, 66, 912, 712, 80]
```

### For ...in:
Loop entre propriedades enumeráveis de um objeto.
```
function forInExemplo(obj) {
  for(prop in obj) {
    console.log(prop)
  }
}

const meuObjeto = {
  nome: 'João',
  idade: 25,
  cidade: 'Salvador'
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade
```

```
function forInExemplo(obj) {
  for(prop in obj) {
    console.log(prop[prop])
  }
}

const meuObjeto = {
  nome: 'João',
  idade: 25,
  cidade: 'Salvador'
}

forInExemplo(meuObjeto);
//'João'
//25
//'Salvador'
```

### For ...of:
Loop entre estruturas iteráveis (arrays, strings).

```
function logLetras(palavra) {
  for(letra of palavra) {
    console.log(letra)
  }
}

const palavra = 'abacaxi';
logLetras(palavra);
//a
//b
//a
//c
//a
//x
//i
```

```
function logNumeros(nums) {
  for(num of nums) {
    console.log(num);
  }
}

const nums = [30, 20, 233, 2];
logNumeros(nums);
//30
//20
//233
//2
```

### while e do ...while:

#### while:
Executa instruções até que a condição se torne falsa.

```
function exemploWhile() {
  let num = 0;

  while(num <= 5>) {
    console.log(num)
    num++;
  }
}

exemploWhile()
//0
//1
//2
```

#### do ...while:
Executa instruções até que a consição se torne falsa. Porém, a primeira execução sempre ocorre.

```
function exemploDoWhile() {
  let num = 0;

  do {
    console.log(num);
    num++;
  } while(num <= 5)
}

exemploDoWhile();
//0
//1
//2
//3
//4
//5
```

```
function exemploDoWhile() {
  let num = 6;

  do {
    console.log(num);
    num++;
  } while(num <= 5)
}

exemploDoWhile();
//6
```

# Aula 4 - This
A palavra reservada this é uma referência de contexto.
No exemplo, this refere-se ao objeto pessoa:

```
const pessoa = {
  firstName: 'André',
  lastName: 'Soares',
  id: 1,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function() {
    return this.id
  }
};

pessoa.fullName(); //"André Soares"
pessoa.getId(); //1
```

## This: o que é?
Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

| Contexto | Referência |
| --- | --- |
| Em um objeto (método) | Próprio objeto dono do método |
| Sozinha | Objeto global (em navegadores, window) |
| Função | Objeto global |
| Evento | Elemento que recebeu o evento |


### Manipulando seu valor:
#### Call:
```
const pessoa = {
  nome: 'Miguel',
};

const animal = {
  nome: 'Murphy',
};

function getSomething() {
  console.log(this.nome);
}
getSomething.call(pessoa); //'Miguel'
getSomething.call(animal); //'Murphy'

```

É possível passar parâmetros para essa função separando-os por vírgulas.
```
const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); //12
```

#### Applay:
```
const pessoa = {
  nome: 'Miguel',
};

const animal = {
  nome: 'Godi',
};

function getSomething() {
  console.log(this.nome);
}

getSomething.apply(pessoa);//'Miguel'
getSomething.apply(animal);//'Godi'
```

É possível passar parâmetros para essa função dentro de um array.
```
const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); //12
```

#### bind
Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
```
const retornaNomes = function() {
  return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});
bruno(); //Bruno
```

# Aula 5 -  Arrow Functions
## sintaxe:
```
const helloWorld = () => {
  return "Hello, world!";
}
```

caso exista apenas uma linha, pode dispensar as chaves e o return:
```
const helloWorld = () => "Hello, world!"
```

caso exista apenas um parâmetro, pode dispensar os parênteses:
```
const soma = a => a;
soma(4) //4
```
## Restrições:
 - Arrow functions NÃO faz hoisting!!
 - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
 - Não existe o objeto "arguments"
 - O construtor (ex: new MeuObjeto()) também não pode ser utilizado

# Aula 6 - 

