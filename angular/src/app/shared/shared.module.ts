import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ProjetoComponent } from './components/projeto/projeto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProjetoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ProjetoComponent
  ]
})
export class SharedModule { }
