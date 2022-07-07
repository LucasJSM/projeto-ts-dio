enum Profession {
  Atriz,
  Padeiro,
}

interface Person {
  nome: string,
  idade: number,
  profession: Profession,
}

const person1: Person = {
  nome: "maria",
  idade: 29,
  profession: Profession.Atriz,
}

const person2: Person = {
  nome: "roberto",
  idade: 19,
  profession: Profession.Padeiro,
}

const person3: Person = {
  nome: "Laura",
  idade: 32,
  profession: Profession.Atriz,
}

const person4: Person = {
  nome: "Carlos",
  idade: 19,
  profession: Profession.Padeiro,
}