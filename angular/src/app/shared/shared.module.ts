import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ProjetoComponent } from 'src/app/shared/components/projeto/projeto.component';
import { PhonePipe } from './pipes/phone.pipe';
import { TituloPaginasComponent } from './components/titulo-paginas/titulo-paginas.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ProjetoComponent,
    FooterComponent,
    PhonePipe,
    TituloPaginasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    ProjetoComponent,
    FooterComponent,
    PhonePipe,
    TituloPaginasComponent
  ]
})
export class SharedModule { }
