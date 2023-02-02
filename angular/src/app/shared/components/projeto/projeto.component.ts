import { Component, Input } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {

  @Input() public projeto!: Projeto
}
