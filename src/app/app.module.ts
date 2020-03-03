import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import { MatTabsModule, MatToolbarModule } from '@angular/material';
import { SalesComponent } from './dashboard/sales/sales.component';
import { SupplychainComponent } from './dashboard/supplychain/supplychain.component';
import { PettycashComponent } from './dashboard/pettycash/pettycash.component';
import { PayreceiveComponent } from './dashboard/payreceive/payreceive.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DashboardComponent,
    SalesComponent,
    SupplychainComponent,
    PettycashComponent,
    PayreceiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
