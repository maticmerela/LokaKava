import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';

import { HomeComponent } from './home/home.component';
import { KaveComponent } from './kave/kave.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { IvanaComponent } from './ivana/ivana.component';
import { SkodeliceComponent } from './skodelice/skodelice.component';
import { AromatiziraneComponent } from './aromatizirane/aromatizirane.component';

@NgModule({
  declarations: [
    HomeComponent,
    KaveComponent,
    OgrodjeComponent,
    IvanaComponent,
    SkodeliceComponent,
    AromatiziraneComponent,

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
  },
  {
    path: 'kave',
    component: KaveComponent
  },
  {
    path: 'aromatizirane',
    component: AromatiziraneComponent
  },
  {
    path: 'ivana',
    component: IvanaComponent
  },
  {
    path: 'skodelice',
    component: SkodeliceComponent
  }
])
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
