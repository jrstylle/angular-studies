import { Component } from '@angular/core';
import { Relative }  from './relative/relative.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  relatives: Relative[] = [
    { name:  "Maria da Conceição do Nascimento", age: 59, hasChild: true},
    { name:  "Washigthon Luis do Nascimento", age: 41, hasChild: true},
    { name:  "Francisca Cristiane do Nascimento", age: 37, hasChild: true},
    { name:  "Ântonio Paulo Medeiros do Nascimento", age: 36, hasChild: true},
    { name:  "Francisco das Chagas do Nascimento", age: 30, hasChild: false},
    { name:  "José Rodrigues da Silva Junior", age: 25, hasChild: false}
  ]
}
