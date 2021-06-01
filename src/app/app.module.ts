import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMainPageComponent } from './ components/tab-main-page/tab-main-page.component';
import { TabItemComponent } from './ components/tab-item/tab-item.component';
import { TabMenuContainerComponent } from './ components/tab-menu-container/tab-menu-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMainPageComponent,
    TabItemComponent,
    TabMenuContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
