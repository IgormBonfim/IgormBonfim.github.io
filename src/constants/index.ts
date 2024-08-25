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
  titulo: "Quasar E-Commerce",
  imagem: quasar,
  descricao: "Projeto E-commerce desenvolvido em equipe para o aprendizado. Utilizando Angular para o front-end e C# para o back-end.",
  tecnologias: ["C#", ".Net", "Angular", "MySQL"],
};

const projetoPicPay: Projeto = {
  titulo: "PicPayChallenge",
  imagem: picpaychallenge,
  descricao:"Desafio técnico no PicPay, incluindo implementação do Kafka e integração com o PagSeguro para diversos métodos de pagamento.",
  tecnologias: ["C#", ".Net", "React", "Next.js", "MySQL", "Kafka"],
};

const projetoAluralfix: Projeto = {
  titulo: "Aluraflix",
  imagem: aluraflix,
  descricao: "Projeto desenvolvido durante a quinta edição do challenge backend da Alura. Desenvolvido utilizando Angular, C#, Asp.Net e MySQL.",
  tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
};

export const PROJETOS_EM_DESTAQUE: Projeto[] = [
  projetoQuasar,
  projetoPicPay,
  projetoAluralfix
];
