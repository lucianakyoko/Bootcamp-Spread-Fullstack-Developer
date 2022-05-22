
interface Pessoa {
  nome: string;
  idade: number;
  nacinalidade: string;
}

interface Brasileira extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileira = {
  
}