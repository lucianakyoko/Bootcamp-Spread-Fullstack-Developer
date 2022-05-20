# AULA 1 - ENTENDENDO O D.O.M
## O que é:
Document Object Model. O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

## DOM vs BOM:
BOM - Browser Object Model: É tudo o que está dentro do objeto window.
O DOM é um dos filhos do BOM.

![](./img/class01-BOM.JPG);

---

# AULA 2 - SELECIONANDO ELEMENTOS
Estrutura HTML:
![](./img/class02-selecionando-elementos.JPG)

Selecionando os elementos de uma página:
![](./img/class02-selecionando-elementos1.JPG)

![](./img/class02-selecionando-elementos2.JPG)

Adicionar e deletar:

| Método | Descrição |
| --- | --- |
| document.createElement(element) | cria um novo elemento HTML |
| document.removeChild(element) | remove um elemento |
| document.appendChild(element) | adiciona um elemento |
| document.replaceChild(new, old) | substitui um elemento |

---

# AULA 3 - TRABALHANDO COM ESTILOS
## Element.classList:
![](./img/class03-trabalhando-com-estilos.JPG)
![](./img/class03-trabalhando-com-estilos1.JPG)

## Acessando diretamente o CSS de um elemento:
```
document.getElementByTagName("p").style.color = 'blue';
```

---

# AULA 4 - EVENTOS
## Tipos:
* Eventos do mouse:
  - mouseover
  - mouseout

* Eventos de clique:
  - click
  - dbclick

* Eventos de atualização:
  - change
  - load

## Event listener:
Diretamente no JavaScript, cria um evento que vai ser acionado no momento em que o usuário realizar uma deteminada ação:

```
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);
```

## Atributo HTML:

Especifica a função a ser chamada diretamente no elemento HTML.

```
<html>
  <body>
    <h1 onclick="mudaTexto(this)">Clique aqui</h1>

    <script>
      function mudaTexto(id) {
        id.innerHtml = 'Mudei!';
      }
    </script>
  </body>

</html>
```