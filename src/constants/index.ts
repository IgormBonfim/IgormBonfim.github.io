import { Experiencia } from "../types/experienca";
import { Projeto } from "../types/projeto";
import quasar from '../assets/Images/Quasar.png'
import aluraflix from '../assets/Images/aluraflix.png'
import picpaychallenge from '../assets/Images/PicPayChallenge.png'


export const EXPERIENCIAS: Experiencia[] = [
    {
        ano: "caixa-web.ano",
        cargo: "caixa-web.cargo",
        empresa: "caixa-web.empresa",
        descricao: "caixa-web.descricao",
        tecnologias: ["C#", ".Net", "TypeScript", "Angular", "Oracle", "Kafka"]
    },
    {
        ano: "grc.ano",
        cargo: "grc.cargo",
        empresa: "grc.empresa",
        descricao: "grc.descricao",
        tecnologias: ["C#", ".Net", "TypeScript", "Angular", "MongoDB", "SQS"]
    },
    {
        ano: "aksie.ano",
        cargo: "aksie.cargo",
        empresa: "aksie.empresa",
        descricao: "aksie.descricao",
        tecnologias: ["TypeScript", "Angular", "SASS"]
    }
];

const projetoQuasar: Projeto = {
  titulo: "projetos.quasar.titulo",
  imagem: quasar,
  descricao: "projetos.quasar.descricao",
  tecnologias: ["C#", ".Net", "Angular", "MySQL"],
};

const projetoPicPay: Projeto = {
  titulo: "projetos.PicPayChallenge.titulo",
  imagem: picpaychallenge,
  descricao:"projetos.PicPayChallenge.descricao",
  tecnologias: ["C#", ".Net", "React", "Next.js", "MySQL", "Kafka"],
};

const projetoAluralfix: Projeto = {
  titulo: "projetos.Aluraflix.titulo",
  imagem: aluraflix,
  descricao: "projetos.Aluraflix.descricao",
  tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
};

export const PROJETOS_EM_DESTAQUE: Projeto[] = [
  projetoQuasar,
  projetoPicPay,
  projetoAluralfix
];
