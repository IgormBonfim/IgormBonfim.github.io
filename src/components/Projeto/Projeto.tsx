import { useTranslation } from "react-i18next"
import TecnologiaTag from "../TecnologiaTag/TecnologiaTag";
import { Projeto as ProjetoType } from "../../types/projeto";

export default function Projeto(projeto: ProjetoType) {

    const { t } = useTranslation();
    return (
        <div className="group max-w-md cursor-pointer">
            <div className="rounded-lg max-w-md overflow-hidden ">
                <img src={projeto.imagem} alt="Imagem do Projeto" className="transition duration-200 group-hover:scale-105"/>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {projeto.tecnologias.map((tecnologia, index) => <TecnologiaTag key={index} {...{tecnologia}}/>)}
            </div>
            <h4 className="mt-2 font-bold text-xl text-blue-700 group-hover:text-blue-500">{t(projeto.titulo)}</h4>
            <p className="my-2 text-neutral-400 text-justify tracking-tighter line-clamp-3">{t(projeto.descricao)}</p>
        </div>
    )
}