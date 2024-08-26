import { useTranslation } from "react-i18next"

export default function Sobre() {
    const IMG_URL = "https://github.com/igormbonfim.png";
    const CARGO = "cargo";
    const SOBRE = "sobre";
    const URL_CURRICULO = "linkCurriculo";
    const URL_WHATSAPP = "https://api.whatsapp.com/send?phone=5527992523204";
    const BTN_CONTATO = "btnContato";

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-col items-center gap-4">
                <img src={IMG_URL} alt="Igor Bonfim - Desenvolvedor de Software Full-Stack" className="rounded-full max-w-64"/>
                <h2 className="text-3xl">{t(CARGO)}</h2>
                <p className="my-2 max-w-xl py-4 font-light text-justify">
                    {t(SOBRE)}
                </p>
                <div className="flex justify-center gap-4 text-lg">
                        <a href={URL_WHATSAPP} target="_blank" className="rounded-xl bg-blue-700 hover:bg-blue-600 p-4">{t(BTN_CONTATO)}</a>
                    <a href={t(URL_CURRICULO)} target="_blank" className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4">Download CV</a>
                </div>
            </div>
        </section>
    )
}