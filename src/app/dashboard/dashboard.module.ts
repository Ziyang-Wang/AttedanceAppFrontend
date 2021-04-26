import { NgModule } from '@angular/core';
import { DashboarRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  imports: [
    SharedModule,
    DashboarRoutingModule
  ],
  declarations: [
    HomeComponent,
    ClassComponent,
    ...DashboarRoutingModule.components,
    
  ]
})
export class DashboardModule { }
