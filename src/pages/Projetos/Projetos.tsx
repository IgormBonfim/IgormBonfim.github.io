import { t } from "i18next";
import Projeto from "../../components/Projeto/Projeto";
import { PROJETOS } from "../../constants/projetos";

export default function ProjetosPage() {
  const MEUS_PROJETOS = "meusProjetos"

  return (
    <section className="pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-3xl">{t(MEUS_PROJETOS)}</h2>
      <div className="mb-4 flex flex-wrap items-stretch justify-center gap-5">
        {PROJETOS.map((projeto, index) => (
          <Projeto key={index} {...projeto} />
        ))}
      </div>
    </section>
  );
}