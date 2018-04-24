import { Component, OnInit, Inject } from '@angular/core';
import { Hometodo } from './model/home.model';
import { HomeService } from './service/home-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  private todos: Hometodo[] = [];
  desc: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() { }

  addTodo() {
    this.todos = this.homeService.addTodo(this.desc);
    this.desc = "";
  }

}
