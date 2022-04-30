const compareNumber = (n1, n2) => {
  const sentence1 = createSentence1(n1, n2);
  const sentence2 = createSentence2(n1, n2);

  return `${sentence1}. ${sentence2}`;
};

const createSentence1 = (n1, n2) => {
  const areEquals = n1 === n2;
  let yesOrNo = 'não ';

  if(areEquals) yesOrNo= ``;

  return `Os números ${n1} e ${n2} ${yesOrNo}são iguais`;
}

const createSentence2 = (n1, n2) => {
  const sum = n1 + n2;
  let compare10 = 'menor';
  let compare20 = 'menor';

  if(sum > 10) compare10 = 'maior';
  if(sum > 20) compare20 = 'maior';

  return `Sua soma é ${sum}, que é ${compare10} que 10 e ${compare20} que 20.`;
}

console.log(compareNumber(10, 11));