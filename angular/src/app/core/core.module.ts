import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
  ]
})
export class CoreModule { }
