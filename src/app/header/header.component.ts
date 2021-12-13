import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //接受父组件传递来的值。
  @Input() receiveTitle: any;

  //接受父组件，传递过来的get方法
  @Input() getF: any;

  //接受父组件，传递整个home组件
  @Input() home: any;

  // 子组件自己的变量和函数
  public message: string = '我是子组件的message';

  // 子组件自己的变量和函数
  func_get() {
    alert('我是子组件的func_get方法');
  }

  //定义getFun()方法， 接受父组件，传递过来的get方法
  getFun() {
    this.getF();
  }

  //调用home组件的show方法
  getShow() {
    this.home.show();
  }

  constructor() {}

  ngOnInit() {}
}
