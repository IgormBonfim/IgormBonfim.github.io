import { useTranslation } from "react-i18next"
import { experiencia } from "../../types/experienca";
import TecnologiaExperiencia from "./TecnologiaExperiencia";

interface ExperienciaProps {
    index: number
    experiencia: experiencia,
}

export default function Experiencia({index, experiencia}: ExperienciaProps) {

    const { t } = useTranslation();
    return (
        <section key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{t(experiencia.ano)}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-1 font-semibold"> {t(experiencia.cargo)}
                </h6>
                    <span className="text-sm font-bold text-blue-800">
                        {t(experiencia.empresa)}
                    </span>
                <p className="mb-4 text-neutral-400"> {t(experiencia.descricao)} </p>
                {experiencia.tecnologias.map((tecnologia, index) => (<TecnologiaExperiencia {...{index, tecnologia}} ></TecnologiaExperiencia>))}
            </div>
        </section>
    )
}