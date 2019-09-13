import { Component, OnInit } from '@angular/core';
import { aluno } from '../alunos';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  //import de um aluno com os atributos da classe aluno
  aluno:aluno;

  constructor() { }

  //função para mostrar os detalhes do aluno que seja selecionado
  showDetails(aluno:aluno) {
    this.aluno = aluno;
  }

  ngOnInit() {
  }

}