import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMainPageComponent } from './ components/tab-main-page/tab-main-page.component';
import { TabItemComponent } from './ components/tab-item/tab-item.component';
import { TabMenuContainerComponent } from './ components/tab-menu-container/tab-menu-container.component';
import { AllListContainerComponent } from './ components/all-list-container/all-list-container.component';
import { FinishedItemsListContainerComponent } from './ components/finished-items-list-container/finished-items-list-container.component';
import { TodoItemsListContainerComponent } from './ components/todo-items-list-container/todo-items-list-container.component';
import { ListItemComponent } from './ components/list-item/list-item.component';
import { NewListItemInputComponent } from './ components/new-list-item-input/new-list-item-input.component';
import { ItemsService } from './services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    TabMainPageComponent,
    TabItemComponent,
    TabMenuContainerComponent,
    AllListContainerComponent,
    FinishedItemsListContainerComponent,
    TodoItemsListContainerComponent,
    ListItemComponent,
    NewListItemInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
