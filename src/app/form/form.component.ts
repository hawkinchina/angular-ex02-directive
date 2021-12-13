import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public personInfo: any = {
    username: '',
    sex: '1',
    cityList: ['北京', '广州', '上海'],
    city: '北京',
    interest: [
      { name: '唱歌', checked: false },
      { name: '跳舞', checked: false },
      { name: '画画', checked: true },
    ],
    mark: '',
  };

  doSubmit() {
    window.alert(this.personInfo.toString());
    console.log(this.personInfo);
  }
}
