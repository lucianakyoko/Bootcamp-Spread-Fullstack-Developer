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
## Métodos
## Set vs Array
