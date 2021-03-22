import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TreeMapModule for the TreeMap component
import { TreeMapModule, TreeMapLegendService, TreeMapTooltipService, TreeMapAllModule  } from '@syncfusion/ej2-angular-treemap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TreeMapModule, TreeMapAllModule
  ],
  providers: [TreeMapLegendService, TreeMapTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
