 export default function platzom(word) {
  word = word.toLowerCase();
  let translation = word;
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (word.endsWith('ar')) {
    translation = word.slice(0, -2);
  }

  //Si la palabra comienza en "z", se le añade "pe" al final
  if (word.startsWith('z')) {
    translation += "pe";
  }

  //Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un - en medio
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length / 2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  //Si la palabra original es un palíndromo, ninguna de las reglas anteriores
  //cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    // console.log("antes: "+str);
    // aux = str.toLowerCase();
    // console.log("prueba: " + str);
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (var i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  // console.log("booleano del reverse" + word == reverse(word));
  if (word == reverse(word)) {
    return minMay(word);
  }
  return translation;
}
