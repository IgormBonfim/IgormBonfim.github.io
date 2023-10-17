import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotjoshueComponent } from 'src/app/projetos/paginas/botjoshue/botjoshue.component';
import { ListagemProjetosComponent } from 'src/app/projetos/paginas/listagem-projetos/listagem-projetos.component';
import { WipComponent } from 'src/app/shared/components/wip/wip.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ListagemProjetosComponent
  },
  {
    path: "botjoshue",
    component: BotjoshueComponent
  },
  {
    path: "wip",
    component: WipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
