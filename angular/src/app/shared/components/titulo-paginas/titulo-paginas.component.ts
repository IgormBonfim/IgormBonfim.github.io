import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-paginas',
  templateUrl: './titulo-paginas.component.html',
  styleUrls: ['./titulo-paginas.component.scss']
})
export class TituloPaginasComponent {

  @Input() public imagemLink!: string;
  @Input() public titulo!: string;
  @Input() public subtitulo!: string;
}
