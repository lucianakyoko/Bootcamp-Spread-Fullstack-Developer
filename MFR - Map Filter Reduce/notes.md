# AULA 1 - MAP
- A função de map não modifica o array original, e sim, cria um novo array.
- Realiza operações em ordem
- Percorre um array e executa uma funcao em cada um de seus items

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

--- 

# AULA 2 - FILTER
- Cria um novo array e não modifica o array original

```
array.filter(callback, thisArg)
```

exemplo:
```
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
fruntas.filter(fruta => frutas.includes('maçã))
//['maçã fuji', 'maça verde']
```

# AULA 3 - REDUCE