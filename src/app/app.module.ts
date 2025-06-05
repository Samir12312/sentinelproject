import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ServersComponent } from './servers/servers.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    ServersComponent,
    InfoComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
