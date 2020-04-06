import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-for-neu-cli';

  constructor(public appService: AppService) { }
  ngOnInit(): void {
    this.appService.loadNeu();
    console.log('success');

  }

}
