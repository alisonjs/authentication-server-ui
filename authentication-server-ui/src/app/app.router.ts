import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: AppComponent
    }
    ];

export const RoutingModule = RouterModule.forRoot(routes);