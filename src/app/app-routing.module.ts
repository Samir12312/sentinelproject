import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { ServersComponent } from './servers/servers.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'donate', component: DonateComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

