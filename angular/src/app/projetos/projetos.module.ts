import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BotjoshueComponent } from 'src/app/projetos/paginas/botjoshue/botjoshue.component';
import { ListagemProjetosComponent } from 'src/app/projetos/paginas/listagem-projetos/listagem-projetos.component';
import { ProjetosRoutingModule } from 'src/app/projetos/projetos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListagemProjetosComponent,
    BotjoshueComponent,
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    SharedModule
  ]
})
export class ProjetosModule { }
