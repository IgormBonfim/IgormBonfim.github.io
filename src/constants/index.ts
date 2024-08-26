import { Experiencia } from "../types/experienca";
import { Projeto } from "../types/projeto";
import quasar from '../assets/Images/Quasar.png'
import aluraflix from '../assets/Images/Aluraflix.png'
import picpaychallenge from '../assets/Images/PicPayChallenge.png'
import { Linguagem } from "../types/Linguagem";

export const LINGUAGENS: Linguagem[] = [
  {
    id: 1,
    linguagem: "ptBR",
    descricao: "Português",
    bandeira: "br"
  },
  {
    id: 2,
    linguagem: "enUS",
    descricao: "English",
    bandeira: "us"
  },
];

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
  descricao: "Desenvolvedor Full-Stack com 3 anos de experiência, pós graduado em arquitetura de software. Possuo experiência no desenvolvimento de API's utilizando C# e .Net, Design Orientado a Domínio (DDD), Clean Architecture e Microsserviços, SQL, MongoDB. Também tenho conhecimento em tecnologias como Kafka, Docker, AWS e ferramentas de CI/CD. Além disso, possuo experiência no desenvolvimento de interfaces visuais utilizando TypeScript, JavaScript, Angular e React.",
  tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
};

export const PROJETOS_EM_DESTAQUE: Projeto[] = [
  projetoQuasar,
  projetoPicPay,
  projetoAluralfix
];