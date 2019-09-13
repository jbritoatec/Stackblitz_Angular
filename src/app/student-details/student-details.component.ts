import { Component, OnInit } from '@angular/core';
import { aluno } from '../alunos';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  aluno:aluno;

  constructor() { }

  showDetails(aluno:aluno) {
    this.aluno = aluno;
  }

  ngOnInit() {
  }

}