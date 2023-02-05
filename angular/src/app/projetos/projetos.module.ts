import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ListagemProjetosComponent } from './paginas/listagem-projetos/listagem-projetos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BotjoshueComponent } from './paginas/botjoshue/botjoshue.component';


@NgModule({
  declarations: [
    ListagemProjetosComponent,
    BotjoshueComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    SharedModule
  ]
})
export class ProjetosModule { }
