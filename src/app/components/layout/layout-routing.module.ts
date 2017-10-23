import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AdminGuard, LecturerGuard } from './../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'lecturer', loadChildren: './lecturer-page/lecturer-page.module#LecturerPageModule' },
            { path: 'user', loadChildren: './user-page/user-page.module#UserPageModule', canActivate: [AdminGuard] },
            { path: 'tution', loadChildren: './tution-page/tution-page.module#TutionPageModule', canActivate: [AdminGuard, LecturerGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
