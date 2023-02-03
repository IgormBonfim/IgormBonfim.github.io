export class Pessoa {
  public nomeCompleto: string;
  public telefone: string;
  public email: string;
  public idade: number;

  constructor(nomeCompleto: string, telefone: string, email: string, dataDeNascimento: Date) {
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.email = email;

    let anoAtual = new Date().getFullYear();

    this.idade = anoAtual - dataDeNascimento.getFullYear();
  }
}
