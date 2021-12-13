import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //传递属性
  public title: string = 'home组件的标题';

  public homeStr: string = 'home组件的变量字符串';
  constructor() {}

  ngOnInit() {}

  //传递方法
  get() {
    alert('我是home组件的get方法');
  }

  show() {
    alert('我是home组件的show方法');
  }

  //个人对@ViewChild的理解就是：它是一个指代，可以通过这个指代，得到这个组件或者元素。并且我们可以使用得到的这个组件的值和方法。
  // 通过@viewChild 主动获取子组件的数据和方法
  // my_header 是子组件的id
  // my_header为子组件中的#后边的值，header是个名称用来指代子组件
  @ViewChild('my_header') header: any;

  //获取，并调用子组件的message 和 方法
  getChildMessage() {
    alert(this.header.message);
  }

  getChildFun() {
    this.header.func_get();
  }
}
