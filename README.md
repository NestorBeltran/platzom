# platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar
de ecucación online

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra comienza en "z", se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un - en medio
- Si la palabra original es un palíndromo, ninguna de las reglas anteriores cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas

## Instalación
```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar"); //Program
platzom("Zorro");//Zorrope
platzom("Zarpar");//Zarppe
platzom("abecedario");//abece-dario
platzom("sometemos");//SoMeTeMoS
```

## Creditos
- [Nestor Beltran](https://twitter.com/Nes_Beltran)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
