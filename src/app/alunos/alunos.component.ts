import { Component, OnInit, Input } from '@angular/core';
import { alunos } from '../alunos';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos = alunos;
  //a variavel details recebe os detalhes do aluno.
  @Input() details: StudentDetailsComponent;


  constructor() { }

  ngOnInit() {
  }

}