import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ARTIGOS_EM_DESTAQUE } from "../../constants/artigos";
import Artigo from "../Artigo/Artigo";

export default function Artigos() {
    const BTN_OUTROS_ARTIGOS = "btn.outrosArtigos"
    const TITULO_ARTIGOS = "tituloArtigos"

    const { t } = useTranslation();
    
    return (
        <section className="pb-4 lg:mb-36">
        <h2 className="my-20 text-center text-3xl">{t(TITULO_ARTIGOS)}</h2>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            {ARTIGOS_EM_DESTAQUE.map((artigo, index) => (
                <Artigo key={index} {...artigo}/>
            ))}
        </div>
        <div className="flex justify-center">
            <Link to="/artigos" className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4">{t(BTN_OUTROS_ARTIGOS)}</Link>
        </div>
    </section>
    )
}