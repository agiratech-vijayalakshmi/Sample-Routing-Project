import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  // styleUrls: ['./hello.component.css']
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
@Input() name!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
