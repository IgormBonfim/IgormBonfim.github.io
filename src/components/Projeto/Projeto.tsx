import { useTranslation } from "react-i18next"
import TecnologiaTag from "../TecnologiaTag/TecnologiaTag";
import { Projeto as ProjetoType } from "../../types/projeto";

interface ProjetoProps {
    index: number,
    projeto: ProjetoType
} 

export default function Projeto({ index, projeto }: ProjetoProps) {

    const { t } = useTranslation();
    return (
        <div key={index} className="group max-w-md cursor-pointer">
            <div className="rounded-lg max-w-md overflow-hidden ">
                <img src={projeto.imagem} alt="Imagem do Projeto" className="transition duration-200 group-hover:scale-105"/>
            </div>
            <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tecnologia, index) => (<TecnologiaTag {...{index, tecnologia}}/>))}
            </div>
            <h4 className="mt-2 font-bold text-xl text-blue-700 group-hover:text-blue-500">{t(projeto.titulo)}</h4>
            <p className="py-2 font-light text-justify tracking-tighter">{t(projeto.descricao)}</p>
        </div>
    )
}