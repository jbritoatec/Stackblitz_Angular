import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClassComponent } from './class/class.component';
import { AlunosComponent } from './alunos/alunos.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ClassComponent, AlunosComponent, StudentDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
