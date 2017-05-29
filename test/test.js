const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
  it('Si la palabra termina en "ar", se le quitan esos dos caracteres',function () {
    const translation = platzom("Programar")
    expect(translation).to.equal("program")
  })
  it('Si la palabra comienza en "z", se le añade "pe" al final',function () {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")
    expect(translation).to.equal("zorrope")
    expect(translation2).to.equal("zarppe")
  })
  it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un - en medio',function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra original es un palíndromo, ninguna de las reglas anteriores cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas',function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
