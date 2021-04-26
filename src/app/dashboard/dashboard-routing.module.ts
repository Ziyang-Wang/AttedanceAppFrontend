import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { TeachGuard } from '../shared/guard/teacher.guard'

export const DashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'class/:id',
                component: ClassComponent,
                canActivate: [TeachGuard]
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(DashboardRoutes) ],
    exports: [ RouterModule ],
    providers: [
        TeachGuard
    ]
})

export class DashboarRoutingModule {
  static components = [DashboardComponent, HomeComponent];
}
