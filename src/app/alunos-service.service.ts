import { Injectable } from '@angular/core';
import { aluno } from './alunos';
import { alunos } from './alunos';

@Injectable()
export class AlunosServiceService {

  constructor() { }

  getAlunos(): aluno[]{
    //Todo o codigo para obter alunos de uma api
    return alunos;
  }
}