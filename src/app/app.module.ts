import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';
import { GuiComponent } from './gui/gui.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolComponent,
    GuiComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
