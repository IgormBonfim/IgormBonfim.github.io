import { Component, OnInit } from '@angular/core';

import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public iconeWhatsApp = faWhatsapp;
  public iconeEmail = faEnvelopeOpen;
  public iconeGitHub = faGithub;
  public iconeLinkedIn = faLinkedin;

  public pessoa!: Pessoa;

  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit(): void {
    this.recuperarDados()
  }

  recuperarDados() {
    this.pessoa = this.pessoaService.recuperarDados()
  }

}
