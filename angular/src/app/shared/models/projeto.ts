export class Projeto {
  public titulo: string;
  public descricao: string;
  public linkImagem: string;
  public rota: string;

  constructor(params: Partial<Projeto>) {
    this.titulo = params.titulo || "";
    this.descricao = params.descricao || "";
    this.linkImagem = params.linkImagem || "";
    this.rota = params.rota || "";
  }
}
