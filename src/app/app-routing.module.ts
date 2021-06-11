import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './core/modules/notfound/notfound.component';
import { AuthGuard } from './core/services/auth.guard';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
		path: '',component: HomeComponent 
	},
  {path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
	{ path: 'login', component: LoginComponent },
  {path:'404',component: NotfoundComponent},
  {path:'items',component: ItemListComponent},
	{ path: '**', pathMatch:'full' ,redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
