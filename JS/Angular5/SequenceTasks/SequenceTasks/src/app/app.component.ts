import { Component } from '@angular/core';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SequenceTasks';
  constructor(){}

  ngOnInit() {}

}


// [1,2,3].map(x => [x, x * 10])
// // [[1, 10], [2, 20], [3, 30]]
//
//   [1,2,3].flatMap(x => [x, x * 10])
// // [1, 10, 2, 20, 3, 30]]
