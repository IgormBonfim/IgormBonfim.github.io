import { useTranslation } from "react-i18next";
import Artigo from "../../components/Artigo/Artigo";
import { ARTIGOS } from "../../constants/artigos";

export default function ArtigosPage() {
    const MEUS_ARTIGOS = "meusArtigos";
    
    const { t } = useTranslation();

    return (
        <section className="pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t(MEUS_ARTIGOS)}</h2>
            <div className="mb-4 flex flex-wrap items-stretch justify-center gap-5">
                {ARTIGOS.map((artigo, index) => (
                    <Artigo key={index} {...artigo} />
                ))}
            </div>
        </section>
    );
}
