# AULA 1 - MAP
## Estrutura
Características:
- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for ...of

```
const myMap = new Map()
```

## Métodos
Adicionar, ler e deletar:
```
const myMap = new Map(); 

myMap.set('apple', 'fruit'); //Map(1) {'apple' => 'fruit'}
myMap.get('apple'); //'fruit'
myMap.delete('apple'); //true
myMap.get('apple')// undefined

```

## Map vs Objetos
- Maps podem ter chaves de qualquer tipo. Objetos tem chaves no formato string;
- Maps possuem a propriedade length. No objeto precisa iterar em todas as propriedades para verificar quantas propriedas tem
- Maps são mais fáceis de iterar;
- Utilizando quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo


# AULA 2 - SET
## Estrutura
Sets são estruturas que armazenam apenas valores únicos.
```
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];
const mySet = newSet(myArray); 
```

## Métodos
Adicionar, consultar e deletar:

```
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1); //true
mySet.has(3); //false

mySet.delete(5);

```
## Set vs Array
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc
