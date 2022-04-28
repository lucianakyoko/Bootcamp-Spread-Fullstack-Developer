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

## Flex Direction
É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.

Eixos:
* row(padrão): direção do texto, esquerda para direita
* row-reverse: sentido oposto, da direita para esquerda
* column: ordenação de cima para baixo em coluna única
* column-reverse: ordenação oposta (de baixo para cima), também em coluna única

## Flex Wrap
É a propriedade que define se os items devem ou não quebrar a linha.
Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo

* nowrap: é o padrão, não permite a quebra de linha
* wrap: permite a quebra de linha assim que um dos flex items não puder mais ser compactado
* wrap-reverse: permite a quebra de linha assim que um dos flex não puder mais ser compactado, porém na direção contrária da linha, acima.

## Flex Flow
É um atalho para as propriedades flex-direction e flex-wrap.
Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

## Flex Content
Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

Obs.: Caso seus itens estejam ocupando 100% de todo o container, ela não se aplica.

Variações:
* flex-start: início do container
* flex-end: final do container
* center: traz os elementos ao centro do container
* space-betwwen: cria um espaçamento igual entre os elementos
* space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final

## Align Items
Trata dos alinhamento dos flex items de acordo com o eixo do container.
O alinhamento é diferente para quando os itens estão em colunas ou linhas.
Esta propriedade permite o alinhamento central no eixo vertical.

Tipos de alinhamento:
* center: alinhamento dos itens ao centro
* stretch: padrão, e os flex itens cresçam igualmente
* flex-start: alinhamento dos itens no inicio
* flex-end: alinhamento dos itens ao final
* baseline: alinhamento de acordo com a linha base da tipografia dos itens

## Align Content
É a propriedade resposnável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container

Precisamos que: 
* O container utilize quebra de linhas
* A altura do container seja maior que a soma das linhas dos itens

Tipos de alinhamento:
* center: alinhamento central dos itens ao centro
* stretch: é o padrão e os flex itens crescem igualmente
* flex-start: alinhamento dos itens no início
* flex-end: alinhamento dos itens no final
* space-between: cria um espaçamento igual entre os elementos
* space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final

---

# AULA 3 - FUNDAMENTOS DO FLEXBOX - FLEX ITEMS
## Flex Grow
Define a proporcionalidade de crescimentos dos itens, respeitando o tamanho de seus conteúdos internos.

Obs.: Não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

## Flex Basis
É a propriedade que estabelece o tamanho inicial do item antes das distribuição restante dentro dele, usando como base o conteúdo interno disposto.

Valores possíveis:
* auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item.
* px, %, em ...: são valores exatos previamente definidos
* 0 (zero): terá relação com a definição do flex-grow

## Flex Shrink
É a propriedade que estabelece a capacidade de redução ou compressão do tamanho de um item.

## Flex
Esta propriedade é um atalho ou abreviação de escrita para as propriedades: grow, shrink e basis

## Order
Esta propriedade irá lidar diretamente com a ordenação dos itens
