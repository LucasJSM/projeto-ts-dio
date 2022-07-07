// By interface
interface Employee1 {
  code: number;
  name: string;
}

const firstEmployee: Employee1 = {
  code: 10,
  name: "John",
}
console.log(firstEmployee);

// By class
class Employee2 {
  public code: number;
  public name: string;

  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }
}

const secondEmployee: Employee2 = {
  code: 11,
  name: "Marcus",
}

// By object
const thirdEmployee: { code: number, name: string } = {
  code: 12,
  name: "Marta",
}