/*
Atividade: validação de erros por tipo
  O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

  Crie uma função que recebe um array e um número
  Realize as seguintes validações:
   - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
   - Se o array não for do tipo 'object', lance um erro do tipo TypeError
   - Se o número não for do tipo 'number', lance um erro do tipo TypeError
   - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
   - Utilize a declaração try...catch
  Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validaArray(arr, num) {
  
  try {
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');
    if(typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo object');
    if(typeof num !== 'number') throw new TypeError('O número precisa ser do tipo number');
    if(arr.length !== num) throw new RangeError('O tamanho do array é inválido');

    return arr;
  }

  catch(erro) {
    if(erro instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError');
      console.log(erro.message);
      
    } else if(erro instanceof TypeError) {
      console.log('Este erro é um TypeError');
      console.log(erro.message);
    } else if(erro instanceof RangeError) {
      console.log('Este erro é um RangeError');
      console.log(erro.message);
    } else {
      console.log('Ocorreu tipo de erro não esperado: ' + erro);
    }
  }
}

console.log(validaArray([5,1], 2))
