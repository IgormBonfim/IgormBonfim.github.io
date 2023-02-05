export class Experiencia {
  public cargo: string;
  public empresa: string;
  public imagemEmpresa: string;
  public dataInicio: Date;
  public dataFim: Date;
  public descricao: string;

  constructor(params: Partial<Experiencia>) {
    this.cargo = params.cargo || "";
    this.empresa = params.empresa || "";
    this.imagemEmpresa = params.imagemEmpresa || "";
    this.dataInicio = params.dataInicio || new Date();
    this.dataFim = params.dataFim || new Date();
    this.descricao = params.descricao || "";
  }
}
