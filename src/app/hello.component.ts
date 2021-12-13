import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
             <input type='text' [(ngModel)]="input_name">
             <p> {{ input_name }}</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  input_name = 'Tom';
}
