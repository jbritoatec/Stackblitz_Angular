import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  turma:Turma = {
    name: "TPSIP-10.18",
    description: "Turma de programação",
    start_date: new Date(2018,10,22),
  }


  constructor() { }

  ngOnInit() {
  }

}