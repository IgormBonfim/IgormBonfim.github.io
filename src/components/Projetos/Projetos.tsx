import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import Projeto from "../Projeto/Projeto";
import { PROJETOS_EM_DESTAQUE } from "../../constants/projetos";

export default function Projetos() {
    const BTN_OUTROS_PROJETOS = "btn.outrosProjetos"

    const { t } = useTranslation();
    return (
        <section className="pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t('tituloProjetos')}</h2>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
                {PROJETOS_EM_DESTAQUE.map((projeto, index) => (
                    <Projeto key={index} {...projeto}/>
                ))}
            </div>
            <div className="flex justify-center">
                <Link to="/projetos" className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4">{t(BTN_OUTROS_PROJETOS)}</Link>
            </div>
        </section>
    )
}