import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  cover = 'yellowcolor';

  user = { name: 'Qijie' };

  myVar: string = 'D';

  is_redcolor: boolean = true;
  has_border: boolean = false;

  is_change: boolean = false;

  //city
  public cities = ['北京', '上海', '深圳'];

  onSave() {
    window.alert('....save.....!');
  }
  change() {
    this.is_change = !this.is_change;
  }
}
