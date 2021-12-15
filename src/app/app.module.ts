import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HidenodeDirective } from './directives/hidenode.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent,
    HomeComponent,
    HeaderComponent,
    HighlightDirective,
    HidenodeDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
