const verificaPalindromo = string => {
  if(!string) return "string inexiste";

  console.log(string
    .split('')
    .reverse()
    .join('') === string);
}

verificaPalindromo('socorrame')