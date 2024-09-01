import Projeto from "../../components/Projeto/Projeto";
import { PROJETOS } from "../../constants";

export default function ProjetosPage() {
  return (
    <section className="pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-3xl">Projetos</h2>
      <div className="mb-4 flex flex-wrap items-stretch justify-center gap-5">
        {PROJETOS.map((projeto, index) => (
          <Projeto key={index} {...projeto} />
        ))}
      </div>
    </section>
  );
}