export class Pessoa {
  public nomeCompleto: string;
  public imagem: string;
  public telefone: string;
  public email: string;
  public idade: number;

  constructor(nomeCompleto: string, imagem: string, telefone: string, email: string, dataDeNascimento: Date) {
    this.nomeCompleto = nomeCompleto;
    this.imagem = imagem;
    this.telefone = telefone;
    this.email = email;

    let anoAtual = new Date().getFullYear();

    this.idade = anoAtual - dataDeNascimento.getFullYear();
  }
}
