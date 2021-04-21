import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './core/modules/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
		path: '',component: HomeComponent 
	},
  {path: 'contact', component: ContactComponent},
	{ path: 'login', component: LoginComponent },
  {path:'404',component: NotfoundComponent},
	{ path: '**', pathMatch:'full' ,redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
