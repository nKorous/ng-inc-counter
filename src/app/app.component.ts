import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0

  st: any = setInterval(() => this.counter++, 1000)

  ngOnInit() {
    this.st()
  }

  ngOnDestroy(){
    clearInterval(this.st)
    this.counter = 0
  }


}
