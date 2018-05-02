import { Routes, RouterModule } from '@angular/router'
import { UserComponent } from './user/user.component';

const routes: Routes = [
    //home
    {
        path: 'user',
        component: UserComponent
    }
    ];

export const RoutingModule = RouterModule.forRoot(routes);