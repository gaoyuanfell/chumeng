import { Component, OnInit } from '@angular/core';
import { AutoCookie } from '../decorator/decorator';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @AutoCookie({
    cookieKey: 'chumeng',
    defaultValue: [],
    keep: true
  })
  data

  constructor() {

  }

  ngOnInit() {
    var a:any = {}
    this.data.push(a)
    a.a  = 1;
  }

}
