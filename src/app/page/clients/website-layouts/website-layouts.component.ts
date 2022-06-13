import { Component, Input, OnInit } from '@angular/core';
import data from 'data';

@Component({
  selector: 'app-website-layouts',
  templateUrl: './website-layouts.component.html',
  styleUrls: ['./website-layouts.component.css']
})
export class WebsiteLayoutsComponent implements OnInit {
  authenticate:any = localStorage.getItem('user')
  
  constructor() { }

  ngOnInit(): void {
  }

}
