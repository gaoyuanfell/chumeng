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
              text: '带好媳妇早餐，还有一碗银耳莲子羹，吃完美美哒',
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
          thing: '08:53 到达苏州',
          data: '2019-4-04 08:53',
          detail:[
            {
              text: '座地铁四号线，北寺塔方向，人民南桥下地铁',
              finish: false,
            },
            {
              text: '到达住处 地址：苏州团结桥地铁站-4口（壹公馆精品公寓），具体地址：苏州市姑苏区锦南巷77号姑苏生鲜南环市场B1层',
              finish: false,
            },
            {
              text: '休息下准备去玩咯',
              finish: false,
            },
            
          ]
        },
        {
          thing: '行程开始',
          data: '2019-4-04 09:30',
          detail:[
            {
              text: '拙政园',
              finish: false,
            },
            {
              text: '苏州博物馆',
              finish: false,
            },
            {
              text: '平江历史街区',
              finish: false,
            },
          ]
        }
      ],
    },
    {
      title:'第二天',
      events:[
        {
          thing: '行程开始',
          data: '2019-4-05 09:30',
          detail:[
            {
              text: '留园',
              finish: false,
            },
            {
              text: '山塘街',
              finish: false,
            },
            {
              text: '金鸡湖景区',
              finish: false,
            },
            {
              text: '撸串',
              finish: false,
            },
          ]
        },
      ]
    },
    {
      title:'第三天',
      events:[

      ]
    },
    {
      title:'第四天',
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
