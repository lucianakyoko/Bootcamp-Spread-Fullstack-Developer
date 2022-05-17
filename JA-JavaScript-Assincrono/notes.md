# AULA 1 - DEFINIÇÃO, PROMISES E ASYNC/AWAIT
## Definição:
 Assíncrono: Que não ocorre ou não se efetiva ao mesmo tempo.
 O JavaScrípt roda de maneira síncrona.

![](./img/class01.JPG)

## Promises:
Ojeto de processamento assíncrono.
Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

![](./img/class01-promises.JPG)

Uma promise pode ter 3 estados:
  - Pending
  - Fulfilled
  - Rejected

![](./img//class01-promises1.JPG)

Estrutura de uma promise:
```
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('Resolvida!'));
  }, 2000);
});
```

Manipulação de uma promisse:
```
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('Resolvida!'));
  }, 2000);
});

await myPromise
  .then((result) => result + 'passando pelo then')
  .then((result) => result + 'e agora acabou!')
  .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor:
// "Resolvida passando pelo then e agora acaboy!"
```

## Async/ await:
Funções assícronas precisam dessas duas palavras chaves

```
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida);
    }, 3000);
  });

  const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message));
  
  return resolved;
}
```

Funções assíncronas também retornam Promises!

Utilizando try ... catch:
```
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida);
    }, 3000);
  });

  let result;

  try {
    result = await myPromise
      .then((result) => result + 'passando pelo then')
      .then((result) => result + 'e agora acabou!')
  } catch(err) {
    result = err.message;
  }
  
  return result;
}
```

--- 


# AULA 2 - CONSUMINDO APIs
## O que são APIs?
Aplication Programming Interface

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessá-la por meio de URLs
![](./img/class02-api.JPG)

## JSON: JavaScript Object Notation
É muito comum que APIs retornem seus dados no formato .json, por tanto precisamos tratar esses daod quando os recebermos

## fetch
Consumindo APIs

```
fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma Promise
```

Operações no banco (POST, GET, PUT, DELETE, etc.)

```
fetch('https://endereco-api.com/', {
  method: 'GET',
  cache: 'no-cache',
})
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma Promise
```

```
fetch('https://endereco-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringfy(data)
})
  .then(response => response.json())
  .then(json => console.log(json))

//retorna uma Promise
```