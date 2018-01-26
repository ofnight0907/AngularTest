import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apps';

  ngOnInit() {
    this.changeTitle();
  }

  changeTitle() {
    // this.title += this.title;
  }
}
