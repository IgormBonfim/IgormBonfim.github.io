import { Projeto } from "../types/projeto";
import quasar from '../assets/Images/Quasar.png'
import aluraflix from '../assets/Images/Aluraflix.png'
import picpaychallenge from '../assets/Images/PicPayChallenge.png'
import ChallengeBackendFinancas from '../assets/Images/ChallengeBackendFinancas.png'
import gerenciamentoFuncionarios from '../assets/Images/GerenciamentoFuncionarios.gif'
import pokedex from '../assets/Images/pokedex.gif'
import botJoshue from '../assets/Images/BotJoshue.png'

const projetoQuasar: Projeto = {
    titulo: "projetos.quasar.titulo",
    imagem: quasar,
    descricao: "projetos.quasar.descricao",
    tecnologias: ["C#", ".Net", "Angular", "MySQL"],
    repo: "https://github.com/IgormBonfim/quasar-ecommerce"
  };
  
  const projetoPicPay: Projeto = {
    titulo: "projetos.PicPayChallenge.titulo",
    imagem: picpaychallenge,
    descricao:"projetos.PicPayChallenge.descricao",
    tecnologias: ["C#", ".Net", "React", "Next.js", "MySQL", "Kafka"],
    repo: "https://github.com/IgormBonfim/PicPayChallenge.Payment"
  };
  
  const projetoAluralfix: Projeto = {
    titulo: "projetos.Aluraflix.titulo",
    imagem: aluraflix,
    descricao: "projetos.Aluraflix.descricao",
    tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
    repo: "https://github.com/IgormBonfim/Challenge_Backend_AluraFlix"
  };
  
  export const PROJETOS_EM_DESTAQUE: Projeto[] = [
    projetoQuasar,
    projetoPicPay,
    projetoAluralfix
  ];
  
  export const PROJETOS: Projeto[] = [
    ...PROJETOS_EM_DESTAQUE,
    {
      titulo: "projetos.gerenciamentoFuncionarios.titulo",
      imagem: gerenciamentoFuncionarios,
      descricao: "projetos.gerenciamentoFuncionarios.descricao",
      tecnologias: ["Java", "Spring", "MySQL", "Angular", "TypeScript"],
      repo: "https://github.com/IgormBonfim/Projeto-CRUD-Gerenciamento-de-Funcionarios"
    },
    {
      titulo: "projetos.pokedex.titulo",
      imagem: pokedex,
      descricao: "projetos.pokedex.descricao",
      tecnologias: ["Angular", "TypeScript", "Html", "CSS", "RxJs"],
      repo: "https://github.com/IgormBonfim/Angular-Pokedex"
    },
    {
      titulo: "projetos.challengeBackendFinancas.titulo",
      imagem: ChallengeBackendFinancas,
      descricao: "projetos.challengeBackendFinancas.descricao",
      tecnologias: ["C#", ".Net", "MySQL"],
      repo: "https://github.com/IgormBonfim/Challenge_Backend_Financas"
    },
    {
      titulo: "projetos.botJoshue.titulo",
      imagem: botJoshue,
      descricao: "projetos.botJoshue.descricao",
      tecnologias: ["Node.Js", "JavaScript", "Discord.js", "YoutubeAPI"],
      repo: "https://github.com/IgormBonfim/BotJoshue"
    },
  ]