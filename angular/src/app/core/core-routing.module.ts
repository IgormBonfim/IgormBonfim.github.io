import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/core/components/main/main.component';
import { HomeComponent } from 'src/app/core/paginas/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: MainComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: HomeComponent
      }
    ]
  },
  {
    path: "projetos",
    component: MainComponent,
    loadChildren: () => import("src/app/projetos/projetos.module").then((m) => m.ProjetosModule),
  },
  {
    path: "sobre",
    component: MainComponent,
    loadChildren: () => import("src/app/sobre/sobre.module").then((m) => m.SobreModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
