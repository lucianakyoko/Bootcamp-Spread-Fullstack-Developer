# AULA 1 - ECMAScript Error e DOMExpection
## ECMAScript Error:
Erros que ocorrem em tempos de execução.
É composto por:
  - Mensagem
  - Nome
  - Linha
  - Callback

  exemplo:
  ```
  Uncaught ReferenceError: a is not defined at <anonymous>:1:11
  ```

## DOMException:
Erros relacionados ao Document Object Model (DOM).

---

# AULA 2 - Throw, Try/Catch e Finally
## Throw:

Diferenças entre o trow e return:

```
function verificaPalindromo(string) {
  if(!string) return "String inválida";

  return string = string.split('').reverse().join('');
}

verificaPalindromo('cat)

//"String inválida
```

Ao utilizar o throw, teremos o comportamento no console com a mensagem de erro e todas as suas propriedades.
```
function verificaPalindromo(string) {
  if(!string) throw "String inválida";

  return string = string.split('').reverse().join('');
}

//Uncaught String inválida
```

## Try/Catch:
```
function verificaPalindromo(string) {
  if(!string) throw "String inválida";

  return string === string.split(''). reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    console.log(e)
  }
}

tryCatchExemplo('');

//String inválida
```

```
function verificaPalindromo(string) {
  if(!string) throw "String inválida";

  return string === string.split(''). reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    throw e;
  }
}

tryCatchExemplo('');

// Uncaught String inválida
```

## Finally:
É uma instrução que é executada independente se houve ou não um erro
```
function verificaPalindromo(string) {
  if(!string) throw "String inválida";

  return string === string.split(''). reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    throw e;
  }
  finally {
    console.log('A string enviada foi: ' + string)
  }
}

tryCatchExemplo('');
// A string enviada foi:
// Uncaught String inválida


tryCatchExemplo('ala');
// A string enviada foi: ala
// true
```

--- 

# AULA 3 - O objeto Error
Código:
```
new Error(message, fileName, lineNumber)

//todos os parâmetros são opcionais

const meuErro = new Error('Mesagem Inválida');

throw MeuErro;

// Uncaught Error: Mensagem Inválida at <anonymos>:1:17
```

O erro também pode ter um nome
```
const MeuErro = newError('Mensagem Inválida);
MeuErro.name = 'InvalidMessage';

throw MeuErro;

// Uncaught InvalidMessage: Mensagem Inválida at <anonymos>:3:17
```