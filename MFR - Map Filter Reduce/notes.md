# AULA 1 - MAP
A função de map não modifica o array original, e sim, cria um novo array.
Realiza operações em ordem

```
array.map(callback, thisArg)
callback(item, index, array)
```

- Callback: função a ser executada em cada elemento
- thisArg (opcional): valor de 'this' dentro da função de callback

## Map vs forEach
- a diferença basicamente está no valor de retorno
- considere se o array auxiliar será necessário

usando o map:
```
const array = [1, 2, 3, 4, 5];
array.map(item => item * 2) // [2, 4, 6, 8, 10]
```

usando forEach:
```
const array = [1, 2, 3, 4, 5];
array.forEach(item => item * 2) //undefined
```

# AULA 2 - FILTER
# AULA 3 - REDUCE