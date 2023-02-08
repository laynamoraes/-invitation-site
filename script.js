function start() {
  console.log("iniciei")
  buttonNext()
  captureInput()
  classColors()
}

function buttonNext() {
  const buttonNext = document.querySelector("#button-next")

  buttonNext.addEventListener("click", captureInput)
}

function captureInput() {
  var valueInput = document.getElementById("password").value

  // converter JSON para objeto
  const objData = JSON.parse(jsonData)
  objData.map((pessoa) => {
    if (valueInput === pessoa.senha) {
      nextPage()
      var color = document.getElementById("color")
      var name = document.getElementById("name")
      name.innerHTML = `${pessoa.name}`
      color.innerHTML = `${pessoa.cor}`

      if (pessoa.cor === "PRETO") {
        var classColor = color.classList
        var resultColor = classColor.toggle("preto")
        return resultColor
      } else if (pessoa.cor === "VERMELHO") {
        var classColor = color.classList
        var resultColor = classColor.toggle("vermelho")
        return resultColor
      } else if (pessoa.cor === "AZUL") {
        var classColor = color.classList
        var resultColor = classColor.toggle("azul")
        return resultColor
      } else if (pessoa.cor === "AMARELO") {
        var classColor = color.classList
        var resultColor = classColor.toggle("amarelo")
        return resultColor
      } else if (pessoa.cor === "VERDE") {
        var classColor = color.classList
        var resultColor = classColor.toggle("verde")
        return resultColor
      }
    }

    // if (color.innerHTML === "PRETO") {
    //   var elementColor = document.querySelector('#color')
    //   var classColor = elementColor.classList
    //   var resultColor = classColor.toggle("black")

    //   return resultColor
    // }
  })

  return
}

function nextPage() {
  const sectionInitial = document.querySelector("#intial-page")
  const sectionNext = document.querySelector("#call-page")

  const classInitial = sectionInitial.classList
  const classNext = sectionNext.classList

  const resultInitial = classInitial.toggle("password")
  const resultNext = classNext.toggle("off")

  return resultInitial, resultNext
}

const data = [
  { id: 1, name: "Arthur", senha: "arthurvictor", cor: "VERMELHO" },
  { id: 2, name: "Bianca", senha: "biancafilgueira", cor: "PRETO" },
  { id: 3, name: "Costa", senha: "costaneto", cor: "AMARELO" },
  { id: 4, name: "Edson", senha: "edsonjunior", cor: "VERDE" },
  { id: 5, name: "Elder", senha: "eldercastro", cor: "PRETO" },
  { id: 6, name: "Emanuel", senha: "emanuelsouza", cor: "AZUL" },
  { id: 7, name: "Emanuelly", senha: "emanuellyfernandes", cor: "VERDE" },
  { id: 8, name: "Emerson", senha: "emersonkevi", cor: "PRETO" },
  { id: 9, name: "Eric", senha: "ericvictor", cor: "VERMELHO" },
  { id: 10, name: "Gustavo", senha: "gustavodantas", cor: "AMARELO" },
  { id: 11, name: "Henrique", senha: "henriqueserra", cor: "AZUL" },
  { id: 12, name: "Ianca", senha: "iancasanches", cor: "VERMELHO" },
  { id: 13, name: "Isaac", senha: "isaacdealmeida", cor: "PRETO" },
  { id: 14, name: "Israel", senha: "israelsantana", cor: "AMARELO" },
  { id: 15, name: "Jade", senha: "jadecamila", cor: "VERDE" },
  { id: 16, name: "Jefferson", senha: "jeffersongabriel", cor: "AZUL" },
  { id: 17, name: "João", senha: "joaoemanuel", cor: "VERMELHO" },
  { id: 18, name: "Kauan", senha: "kauanvinicius", cor: "AMARELO" },
  { id: 19, name: "Layna", senha: "laynamoraes", cor: "PRETO" },
  { id: 20, name: "Leandro", senha: "leandrobelfort", cor: "VERDE" },
  { id: 21, name: "Letícia", senha: "leticiadantas", cor: "AZUL" },
  { id: 22, name: "Luana", senha: "luanabeatriz", cor: "PRETO" },
  { id: 23, name: "Eduarda", senha: "mariaeduarda", cor: "PRETO" },
  { id: 24, name: "Matheus", senha: "matheuslindoso", cor: "PRETO" },
  { id: 25, name: "Nayanne", senha: "nayanne", cor: "VERMELHO" },
  { id: 26, name: "Patrícia", senha: "patriciacastro", cor: "PRETO" },
  { id: 27, name: "Pedro", senha: "pedrohenrique", cor: "AMARELO" },
  { id: 28, name: "Rebeca", senha: "rebecalima", cor: "PRETO" },
  { id: 29, name: "Rebeca S.", senha: "rebecasantos", cor: "VERDE" },
  { id: 30, name: "Ruan", senha: "ruanlucas", cor: "AZUL" },
  { id: 31, name: "Samuel", senha: "samuelrocha", cor: "VERMELHO" },
  { id: 32, name: "Tânia", senha: "taniadurans", cor: "PRETO" },
  { id: 33, name: "Thayane", senha: "thayanesouza", cor: "PRETO" },
  { id: 34, name: "Giovanna", senha: "giovanna", cor: "AMARELO" },
  { id: 35, name: "Thais", senha: "thaisalves", cor: "VERDE" },
  { id: 36, name: "Thisciane", senha: "thiscianealves", cor: "AZUL" },
]

// converter objeto para JSON
const jsonData = JSON.stringify(data)

start()
