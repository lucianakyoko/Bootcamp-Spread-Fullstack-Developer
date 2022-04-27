# AULA 1 - INTRODUÇÃO AO CURSO

O flexbox foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

## Flex Container:
É a tag que envolve os itens, será nela que iremos aplicar a propriedade "display: flex". Transforma todos os seus itens filhos em flex itens.

Propriedades relacionadas:
* display
* flex-direction
* flex-wrap
* flex-flow (é uma espécie de shorthand para flex-direction e flex-flow)
* justify-content
* align-items
* align-content

## Flex Item:
São elementos filhos diretos do Flex Container. E também podem tornar Flex Container.

Propriedades relacionadas:
* flex-grow (define o fator de crescimento)
* flex-basis (define o tamanho inicial do item antes da distribuição do espaço restante do container) 
* flex-shrink (define a capacidade de redução)
* flex (é o shorthand das três propriedades acima)
* order (é relacionada à ordem de distribição e listagem dos items)
* align-self (define o alinhamento de um item específico do container)

--- 

# AULA 2 - FUNDAMENTOS DO FLEXBOX - FLEX CONTAINER
## Display Flex
Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.


