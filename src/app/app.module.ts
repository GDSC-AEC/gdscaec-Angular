import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { HireComponent } from './hire/hire.component';
import { TListComponent } from './tlist/tlist.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { CloudComponent } from './cloud/cloud.component';
import { ProgComponent } from './prog/prog.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    EventsComponent,
    HomeComponent,
    HireComponent,
    TListComponent,
    ContactComponent,
    TestComponent,
    CloudComponent,
    ProgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
