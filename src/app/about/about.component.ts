import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  clickme() {
    this.http.get('https://api.douban.com/v2/movie/coming_soon')
    .toPromise()
    .then(response => response.json())
    .then(result => { console.log(result)})
    .catch(e => console.log(e));
  }

}
