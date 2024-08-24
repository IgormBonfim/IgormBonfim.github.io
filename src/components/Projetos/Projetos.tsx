import { useTranslation } from "react-i18next"
import { PROJETOS } from "../../constants";

export default function Experiencias() {

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t('projetos')}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {PROJETOS.map((projeto, index) => (
                    <></>
                ))}
            </div>
        </section>
    )
}