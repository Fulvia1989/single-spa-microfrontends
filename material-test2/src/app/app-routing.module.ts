import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'material-test2', redirectTo:'material-test2/home', pathMatch:'full'},
  { path: 'material-test2/home', component: HomeComponent},
  { path: '**', component: EmptyRouteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppRoutingModule { }
