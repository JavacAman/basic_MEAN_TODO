import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';

export const routes: Routes = [
    {
        path: '', component:UsersListComponent
    },
    {
        path: 'create', component:UsersCreateComponent
    },
    {
        path: 'update/:id', component:UsersUpdateComponent
    }
];
