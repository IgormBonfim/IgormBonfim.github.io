import { useTranslation } from "react-i18next"
import { PROJETOS_EM_DESTAQUE } from "../../constants";
import { Link } from "react-router-dom";
import TecnologiaTag from "../TecnologiaTag/TecnologiaTag";

export default function Experiencias() {

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t('projetos')}</h2>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
                {PROJETOS_EM_DESTAQUE.map((projeto, index) => (
                    <>
                        <div key={index} className="group max-w-md cursor-pointer">
                            <div className="rounded-lg max-w-md overflow-hidden ">
                                <img src={projeto.imagem} alt="" className="transition duration-200 group-hover:scale-105"/>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {projeto.tecnologias.map((tecnologia, index) => (<TecnologiaTag {...{index, tecnologia}}/>))}
                            </div>
                            <h4 className="mt-2 font-bold text-xl text-blue-500 group-hover:text-blue-700">{projeto.titulo}</h4>
                            <p className="py-2 font-light text-justify tracking-tighter">{projeto.descricao}</p>
                        </div>
                    </>
                ))}
            </div>
            <div className="flex justify-center">
                <Link to="/projetos" className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4">Outros projetos</Link>
            </div>
        </section>
    )
}