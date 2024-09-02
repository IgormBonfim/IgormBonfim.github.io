import { useTranslation } from "react-i18next";
import { Artigo as ArtigoType } from "../../types/artigo";

export default function Artigo(artigo: ArtigoType) {
    const { t } = useTranslation();
    return (
        <a href={artigo.link} target="_blank">
            <article className="group max-w-md cursor-pointer">
                <div className="rounded-lg max-w-md overflow-hidden ">
                    <img
                        src={artigo.imagem}
                        alt="Imagem do artigo"
                        className="transition duration-200 group-hover:scale-105"
                    />
                </div>
                <h4 className="mt-2 font-bold text-xl text-blue-700 group-hover:text-blue-500">
                    {t(artigo.titulo)}
                </h4>
                <p className="my-2 text-neutral-400 text-justify tracking-tighter line-clamp-3">
                    {t(artigo.descricao)}
                </p>
            </article>
        </a>
    );
}
