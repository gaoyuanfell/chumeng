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
            {
              text: '估计没睡好，给他带好吃的',
              finish: false,
            },
          ]
        },
        {
          thing: '相见 小可爱',
          data: '2019-4-04 06:30',
          detail:[
            {
              text: '给媳妇煮一碗银耳莲子羹，吃完美美哒',
              finish: false,
            },
            {
              text: '带好媳妇早餐，还有火车上的物资',
              finish: false,
            },
            {
              text: '座枢纽1到虹桥火车站，赶8:20的动车 D3064',
              finish: false,
            },
          ]
        },
        {
          thing: '动车前往苏州',
          data: '2019-4-04 08:20',
          detail:[
            {
              text: '吃东西，睡觉',
              finish: false,
            },
          ]
        },
        {
          thing: '08：53 到达苏州',
          data: '2019-4-04 08:53',
          detail:[
            {
              text: '到达住处 地址：苏州团结桥地铁站-4口（壹公馆精品公寓），具体地址：苏州市姑苏区锦南巷77号姑苏生鲜南环市场B1层',
              finish: false,
            },
            {
              text: '休息下准备去玩咯',
              finish: false,
            },
            {
              text: '休息下准备去玩咯',
              finish: false,
            },
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
            {
              text: '离别前的相聚',
              finish: false,
            },
          ]
        },
        {
          thing: '旅游完结',
          data: '2019-4-07 14:10',
          detail:[
            {
              text: '目送媳妇回家，难受',
              finish: false,
            },
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
