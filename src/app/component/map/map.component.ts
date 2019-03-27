import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[attr.class]': '"map"'
  }
})
export class MapComponent implements OnInit {

  aMap

  markers = [
    {
      address: '苏州市姑苏区东北街178号(拙政园)',
      lnglat: [120.629026,31.324165]
    },
    {
      address: '苏州市姑苏区东北街204号(苏州博物馆)',
      lnglat: [120.627648,31.322992]
    },
    {
      address: '苏州市姑苏区平江路与干将东路交叉口(平江历史街区)',
      lnglat: [120.634455,31.313927]
    },
    {
      address: '苏州市姑苏区广济路218号(山塘街)',
      lnglat: [120.600943,31.318276]
    },
    {
      address: '苏州市吴中区钟园路747号(金鸡湖景区)',
      lnglat: [120.700743,31.303492]
    },
    {
      address: '苏州市姑苏区观前(观前街)',
      lnglat: [120.625689,31.311215]
    },
    {
      address: '江苏省苏州市姑苏区吴门桥街道南环新村(南环东路小区北)南环新村二组团小区',
      phone: '17186400373',
      lnglat: [120.633333, 31.283277]
    },
    {
      address: '苏州市姑苏区阊门外留园路338号(留园)',
      lnglat: [120.59226, 31.315369]
    },
    // {
    //   address: '江苏省苏州市吴江区同里镇苏州同里古镇旅游区',
    //   lnglat: [120.722983, 31.154527]
    // },
    // {
    //   address: '江苏省苏州市昆山市周庄镇周庄古镇',
    //   lnglat: [120.851109, 31.115334]
    // },
    // ----------------- 美食 ---------------
    {
      address: '苏州市姑苏区临顿路温家岸12号(哑巴生煎-临顿路分店)',
      lnglat: [120.628400, 31.315131],
      type:2
    },
    {
      address: '苏州市姑苏区平江路115号(桃花源记-平江店)',
      lnglat: [120.633763, 31.314575],
      type:2
    },
    {
      address: '苏州市姑苏区平江路邾长巷2号(鸡脚旮旯-邾长巷)',
      lnglat: [120.634575, 31.311698],
      type:2
    },
    {
      address: '苏州市姑苏区平江路68-76号(鱼食饭稻-平江店)',
      lnglat: [120.634147, 31.312878],
      type:2
    },
    {
      address: '苏州市姑苏区平江路悬桥巷54-1号(阿木舂记-平江路悬桥巷店-悬桥巷内走10米)',
      lnglat: [120.632970, 31.314934],
      type:2
    },
    {
      address: '苏州市姑苏区仓街15号(西北烧烤-仓街店)',
      lnglat: [120.638144, 31.311306],
      type:2
    },
    {
      address: '苏州市姑苏区观前街碧凤坊13-19号2层(胖哥俩肉蟹煲-观前街店)',
      lnglat: [120.629145, 31.311022],
      type:2
    },
    {
      address: '苏州市姑苏区碧凤坊西1-1号(亚马逊牛排自助餐厅-观前店)',
      lnglat: [120.627358, 31.310623],
      type:2
    },
  ]

  initMap() {
    this.aMap = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,//级别
      center: [116.397428, 39.90923],//中心点坐标
      // viewMode: '3D'//使用3D视图
    })
  }

  addPlugin() {

    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    this.aMap.addControl(new AMap.ToolBar());
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    this.aMap.addControl(new AMap.Geolocation());

    // AMap.plugin([
    //   'AMap.ToolBar',
    //   'AMap.Scale',
    //   'AMap.OverView',
    //   'AMap.MapType',
    //   'AMap.Geolocation',
    //   'AMap.InfoWindow',
    // ], () => {
    //   console.info('ok')
    //   // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    //   this.aMap.addControl(new AMap.ToolBar());

    //   // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    //   this.aMap.addControl(new AMap.Scale());

    //   // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
    //   this.aMap.addControl(new AMap.OverView({ isOpen: true }));

    //   // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    //   this.aMap.addControl(new AMap.MapType());

    //   // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    //   this.aMap.addControl(new AMap.Geolocation());
    // });
  }

  markerInstance = []

  addMarker() {
    this.markers.forEach((item) => {
      let mp:any = {
        map: this.aMap,
        position: item.lnglat,
      }
      if(item.type == 2){
        mp.icon = new AMap.Icon({
          size: new AMap.Size(25, 25/(51/70)),
          image: '/assets/img/poi-marker-red.png',
          imageSize: new AMap.Size(25, 25/(51/70)),
          // imageOffset: new AMap.Pixel(-95, -3)
        });
        // mp.offset = new AMap.Pixel(-13, -30)
      }
      let m = new AMap.Marker(mp)
      m.setLabel({
        //修改label相对于maker的位置
        offset: new AMap.Pixel(0, 30),
        content: `<a style="font-size: 0.05rem;" href="androidamap://route?sourceApplication=softname&slat=${this.positionLnglat.lat}&slon=${this.positionLnglat.lng}&sname=当前位置&dlat=${item.lnglat[1]}&dlon=${item.lnglat[0]}&dname=${item.address}&dev=0&m=0&t=1&showType=1" style="padding:10px">${item.address}</a>`
      });
      this.markerInstance.push(m);
      let content = `
        <div>
          ${item.phone?'<p style="font-size: 0.05rem;">电话：<a href="tel:'+ item.phone +'">'+ item.phone +'</a></p>':''}
          <p>地址：<a style="font-size: 0.05rem;" href="androidamap://route?sourceApplication=softname&slat=${this.positionLnglat.lat}&slon=${this.positionLnglat.lng}&sname=当前位置&dlat=${item.lnglat[1]}&dlon=${item.lnglat[0]}&dname=${item.address}&dev=0&m=0&t=1&showType=1" style="padding:10px">${item.address}</a></p>
        </div>
      `
      let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30), content: content });
      AMap.event.addListener(m, 'click', (e) => {
        infoWindow.open(this.aMap, item.lnglat)
      })
    })
  }

  geolocation() {
    return new Promise((resolve, reject) => {
      let geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      })
      geolocation.getCurrentPosition((status, result) => {
        console.info(result)
        if (status == 'complete') {
          resolve(result)
        } else {
          reject(status)
        }
      });

      let number = geolocation.watchPosition()
      console.info(number)
    })
  }

  constructor() { }

  positionLnglat

  ngOnInit() {
    this.initMap()
    this.addPlugin()
    this.geolocation().then((res: any) => {
      this.positionLnglat = res.position
      this.addMarker()
      this.aMap.setFitView(this.markerInstance)
    })
  }

}
