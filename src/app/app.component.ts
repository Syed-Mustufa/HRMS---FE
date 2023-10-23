import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  public isHam : boolean = true;

  public hamTouch(){
    this.isHam = !this.isHam
    console.log('ham touch');
    
  }
}
