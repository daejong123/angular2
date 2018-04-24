import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() data: string;

  @Output() event = new EventEmitter();

  childToParent = "child给parent发送的消息";

  constructor() { }

  ngOnInit() {

  }

  sendtoparent() {
    this.event.emit(this.childToParent);
  }

  fun1() {
    console.log("给parent调用");
  }

}
