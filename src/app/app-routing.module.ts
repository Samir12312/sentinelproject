import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ServersComponent } from './servers/servers.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'info', component: InfoComponent },
  { path: 'details', component: DetailsComponent } ,
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // optional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
