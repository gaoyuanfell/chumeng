import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = [
    {
      title:'第一天',
      events:[
        {
          thing: '购买来上海的火车票 K288',
          data: '2019-4-04 06:30',
          detail:[
            `估计没睡好，给他带好吃的`
          ]
        },
        {
          thing: '相见 小可爱',
          data: '2019-4-04 06:30',
          detail:[
            `给媳妇煮一碗银耳莲子羹，吃完美美哒`,
            `带好媳妇早餐，还有火车上的物资`,
            `座枢纽1到虹桥火车站，赶8：20的动车 D3064`,
          ]
        },
        {
          thing: '动车前往苏州',
          data: '2019-4-04 08:20',
          detail:[
            `吃东西，睡觉`
          ]
        }
      ],
    },
    {
      title:'第二天',
      events:[
        
      ]
    },
    {
      title:'第三天',
      events:[
        {
          thing: '动车前往上海虹桥',
          data: '2019-4-07 13:00',
          detail:[
            `离别前的相聚`
          ]
        },
        {
          thing: '旅游完结',
          data: '2019-4-07 14:10',
          detail:[
            `目送媳妇回家，难受`
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
