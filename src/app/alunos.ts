export class aluno {
name:string;
age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }
}

export const alunos = [
  new aluno("Mikas",18),
  new aluno("Sousa",18),
  new aluno("Brito",18),
  new aluno("Tiago",18),
  new aluno("Daniel",18),

];