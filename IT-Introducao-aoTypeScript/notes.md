# Aula 1 - Como implementar o typescript na prática:

## Vantagens do Typescript:
Typescript é uma extenção do javascript, possuindo features não nativas do javascript, como por exemplo checagem de tipos que facilitam e aceleram o desenvolvimento de sistemas.

## Criando o arquivo index.ts e executando o comando parcel:
- npm init -y para iniciar o package.json
- npm install parcel-bundler
- criar arquivo index.html
- criar arquivo index.ts
- adicionar no arquivo package.json o script: "start": "parcel index.html"
- chamar o index.ts no body do index.html
- dar npm run star no console para realizar o bundle.

## Escrevendo a função soma com typescript:
```
function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(2, 3))

```

ao dar npm run dev, é possível ver no console o resultado.

## Como funcionam as interfaces:
São espécies de contratos para implementar as classes ou estruturas. Uma classe que implementa uma interface é obrigada a implementar todos os seus membros
```
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean,
}
const animal: IAnimal = { 
  nome: 'Elefante',
  tipo: "terrestre",
  executarRugido: alturaEmDecibeis => (`${alturaEmDecibeis}dB`)
};

animal.executarRugido(20)

const felino: IFelino = {
  nome: 'Leão',
  tipo: "terrestre",
  visaoNoturna: true,
  executarRugido: alturaEmDecibeis => (`${alturaEmDecibeis}dB`)
}
```


## Como funcionam os types?:
São utilizados para definir estruturas de dados em classes e funções, além de apoiar suas respectivas validações.

Tudo que fazemos com a interface, podemos fazer com o types, porém o types é mais usado para fazer junções/merges de interfaces.

```
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean,
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = { 
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre',
};

```

## Tratando a tag input:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DIO Typescript</title>
</head>
<body>
  <input id="input" type="text" placeholder="digite os dados"/>
  <script src="./index.ts"></script>
</body>
</html>
```

```
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value)
})

```

## O que são Generic types:
Representam uma maneira de criar parâmetros para classes e definir tipos que podem ser substituídos em vários lugares do programa, eliminando o uso da classe Object para definirmos tipos variáveis

```
function adicionaApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei) {
  return array.map(() => valor);
}

adicionaApendiceALista(['A', 'B', 'C'], 'd');
```

```
function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista(['A', 'B', 'C'], 'd');
```

## Desenvolvendo condicionais a partir de parâmetros:
Permitem que um tipo seja definido dinamicamente com base em uma condição pré fornecida, seguindo um formato padrão

```
interface IUsuario {
  id:string;
  email: string;
}

interface IAdmin extends IUsuario{
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
  if('cargo' in usuario) {
    //redireciona para a area de administracao
  }

  // direcionar para area do usuario
}
```

## Utilizando o caracter "?" para variáveis opcionais

```
interface IUsuario {
  id:string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
  if(usuario.cargo) {
    //redirecionar(usuario.cargo)
  }
  //redirecionar para a area do usuario
}
```


## Criando variaveis com propriedade readonly e private:
readonly é utilizado para propriedades (membros de classes), que pode ser reatribuidos desde que dentro do construtor
```
interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;
  parqueFavorito: string;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao)
```

## Como importar bibliotecas com typescript:

Extender uma biblioteca externa sem mexer nos types que estão definidos dentro dela. Para estes casos, o typescript possui um padrão

typings.d.ts: define os types gerais da aplicação


## Exemplo de como usar Omit e conclusão do curso:
Em um padrão de codificação em Typescript, é criado um novo tipo que omite (omissão) propriedades específicas de outro tipo. Antes usada a combinação dos helpers Pich e Exclude.

```

interface Pessoa {
  nome: string;
  idade: number;
  nacinalidade: string;
}

interface Brasileira extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileira = {
  
}
```