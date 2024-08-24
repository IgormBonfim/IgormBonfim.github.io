import { useTranslation } from "react-i18next"
import { EXPERIENCIAS } from "../../constants";
import Experiencia from "../Experiencia/Experiencia";

export default function Experiencias() {

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t('experiencias')}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {EXPERIENCIAS.map((experiencia, index) => (
                    <Experiencia {...{index, experiencia}}></Experiencia>
                ))}
            </div>
        </section>
    )
}