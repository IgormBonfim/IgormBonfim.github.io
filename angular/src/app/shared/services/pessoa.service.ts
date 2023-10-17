import { Pessoa } from 'src/app/shared/models/pessoa';
import { Injectable } from '@angular/core';

const igor: Pessoa = new Pessoa(
  "Igor Meira Bonfim",
  "https://www.github.com/IgormBonfim.png",
  "5527992523204",
  "igormeirabonfim@gmail.com",
  new Date("2001-01-09")
)

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  public recuperarDados() : Pessoa {
    return igor;
  }

}
