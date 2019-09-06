import { Component, OnInit } from '@angular/core';
import { alunos } from '../alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = alunos;
  constructor() { }

  ngOnInit() {
  }

}