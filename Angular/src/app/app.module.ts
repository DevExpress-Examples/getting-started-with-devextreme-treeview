import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTreeViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
