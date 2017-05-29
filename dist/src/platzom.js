'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(word) {
  word = word.toLowerCase();
  var translation = word;
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (word.endsWith('ar')) {
    translation = word.slice(0, -2);
  }

  //Si la palabra comienza en "z", se le añade "pe" al final
  if (word.startsWith('z')) {
    translation += "pe";
  }

  //Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un - en medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  //Si la palabra original es un palíndromo, ninguna de las reglas anteriores
  //cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    // console.log("antes: "+str);
    // aux = str.toLowerCase();
    // console.log("prueba: " + str);
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
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