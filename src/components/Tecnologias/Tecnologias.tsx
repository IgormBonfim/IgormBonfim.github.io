import { useTranslation } from "react-i18next"
import { RiReactjsLine } from "react-icons/ri";
import Tecnologia from "../Tecnologia/Tecnologia";

export default function Tecnologias() {

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-35">
            <h1 className="my-20 text-center text-3xl">{t('tecnologias')}</h1>
            <article className="flex flex-wrap items-center justify-center gap-4">
                <Tecnologia>
                    <RiReactjsLine className="text-6xl text-cyan-400"></RiReactjsLine>
                </Tecnologia>
            </article>
        </section>
    )
}