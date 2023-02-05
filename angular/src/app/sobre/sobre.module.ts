import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

import { SobreComponent } from './paginas/sobre/sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';


@NgModule({
  declarations: [
    SobreComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class SobreModule { }
