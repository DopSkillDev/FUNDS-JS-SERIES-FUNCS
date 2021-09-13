// OBS: o nome inserido na função é só para dar uma melhor visão. 
// No entanto não é uma boa prática o nome, melhor ideia de nome que seja no singular.

console.log("--- Função de forma simples ---")
function MeDeclara() {
  console.log('Me Declarando')
}

MeDeclara()

console.log("--- Função com parâmetro, utilizando de duas formas. ---")
function MeDeclaraComParametroConcatenado(ComParametro) {
  // 1 - Concatenado
  console.log('Me Declarando com ' + ComParametro)
}

MeDeclaraComParametroConcatenado('Com Parâmetro')

function MeDeclaraComParametroTemplateString(ComParametro) {
  // 2 - Template String
  console.log(`Me Declarando com ${ComParametro}`)
}

MeDeclaraComParametroTemplateString('Com Parâmetro')

console.log("--- Função com retorno, utilizando algumas formas.  ---")
function MeDeclaraComRetorno() {
  return 'Me Retorne'
}

console.log("--- É possível utilizar três formas para a chamada do retorno.")
var MeDeclaraComVar = MeDeclaraComRetorno()
console.log(MeDeclaraComVar)
let MeDeclaraComLet =  MeDeclaraComRetorno()
console.log(MeDeclaraComLet)
const MeDeclaraComConst = MeDeclaraComRetorno()

console.log("--- Função com as duas declarativas. ---")
function MeDeclaraComParametroComRetorno(ComParametro, ComRetorno) {
   return `Me Declarando com ${ComParametro} e com ${ComRetorno}`
}

console.log(MeDeclaraComParametroComRetorno('Parâmetros', 'Retornos'))