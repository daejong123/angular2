import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @viewChild的参数可以是在父html中指定的#child引用的名称，写成字符串可以替代掉ChildComponent
  @ViewChild(ChildComponent) child: ChildComponent;

  dataToChild = "dataTochild";

  constructor() { }

  ngOnInit() {
  }

  click(event) {
    console.log("这是在parent的ts文件中定义的方法..." + event);
  }

  func() {
    this.child.fun1();
  }
}
