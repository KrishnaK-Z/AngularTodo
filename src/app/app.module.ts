import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './pages/main-section/main-section.component';
import { HeaderComponent } from './pages/main-section/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserSectionComponent } from './pages/main-section/user-section/user-section.component';
import { ThemeSwitcherComponent } from './pages/main-section/user-section/theme-switcher/theme-switcher.component';
import { AddTaskComponent } from './pages/main-section/add-task/add-task.component';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    HeaderComponent,
    UserSectionComponent,
    ThemeSwitcherComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
