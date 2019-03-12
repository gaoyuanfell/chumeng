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
      address: '江苏省苏州市姑苏区平江街道拙政园',
      lnglat: [120.629041, 31.324162]
    },
    {
      address: '江苏省苏州市姑苏区平江街道东北街204号苏州博物馆',
      lnglat: [120.627657, 31.322998]
    },
    {
      address: '江苏省苏州市姑苏区平江街道平江历史街区',
      lnglat: [120.634486, 31.314001]
    },
    {
      address: '江苏省苏州市吴江区同里镇苏州同里古镇旅游区',
      lnglat: [120.722983, 31.154527]
    },
    {
      address: '江苏省苏州市昆山市周庄镇周庄古镇',
      lnglat: [120.851109, 31.115334]
    },
    {
      address: '江苏省苏州市吴中区金鸡湖金鸡湖景区',
      lnglat: [120.698344, 31.311124]
    },
    {
      address: '江苏省苏州市吴中区月光码头步行街金鸡湖景区',
      lnglat: [120.707259,31.320194]
    },
  ]

  initMap() {
    this.aMap = new AMap.Map('container', {
      zoom: 11,//级别
      center: [116.397428, 39.90923],//中心点坐标
      viewMode: '3D'//使用3D视图
    })
  }

  addPlugin() {
    AMap.plugin([
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.MapType',
      'AMap.Geolocation',
      'AMap.InfoWindow',
      'AMap.AdvancedInfoWindow',
    ], () => {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      this.aMap.addControl(new AMap.ToolBar());

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      // this.aMap.addControl(new AMap.Scale());

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      // this.aMap.addControl(new AMap.OverView({ isOpen: true }));

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      this.aMap.addControl(new AMap.MapType());

      // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
      this.aMap.addControl(new AMap.Geolocation());
    });
  }

  markerInstance = []

  addMarker() {
    // let infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
    this.markers.forEach((item) => {
      let m = new AMap.Marker({
        map: this.aMap,
        position: item.lnglat
      })
      this.markerInstance.push(m);
      AMap.event.addListener(m, 'click', (e) => {
        let infowindow = new AMap.AdvancedInfoWindow({offset: new AMap.Pixel(0, -30), content: item.address})
        infowindow.open(this.aMap, item.lnglat)
      })
    })
  }

  constructor() { }

  ngOnInit() {
    this.initMap()
    this.addPlugin()
    this.addMarker()
    this.aMap.setFitView(this.markerInstance)
  }

}
