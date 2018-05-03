import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { DocumentsComponent } from './documents/documents/documents.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'users/sign_in',
        component: SignInComponent
    },
    {
        path: 'documents',
        component: DocumentsComponent
    }
    ];

export const RoutingModule = RouterModule.forRoot(routes);