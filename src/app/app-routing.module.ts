import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocComponent } from './pages/doc/doc.component';
import { ComponentComponent } from './pages/component/component.component'
import { SignupComponent} from './pages/signup/signup.component';
import { SinginComponent} from './pages/singin/singin.component';
import {SubscriptionsComponent} from './pages/subscriptions/subscriptions.component';
import { ProfileComponent} from './pages/profile/profile.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocComponent },
  { path: 'components', component: ComponentComponent },
  { path : 'login' , component : SinginComponent},
  { path : 'signup' , component : SignupComponent},
  { path : 'profile' , component : ProfileComponent},
  { path : 'subscription' , component : SubscriptionsComponent},
  { path : 'mysubscription' , component : SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
