import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactComponent } from './contact/contact.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AppareilsComponent, pathMatch:'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'appareils', component: AppareilsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
