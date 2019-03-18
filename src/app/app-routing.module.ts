import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './component/map/map.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: IndexComponent,
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
