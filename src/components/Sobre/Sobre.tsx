import { useTranslation } from "react-i18next"

export default function Sobre() {
    const IMG_URL = "https://github.com/igormbonfim.png";
    const CARGO = "cargo";
    const SOBRE = "sobre";

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-col items-center gap-4">
                <img src={IMG_URL} alt="" className="rounded-full max-w-64"/>
                <h2 className="text-3xl">{t(CARGO)}</h2>
                <p className="my-2 max-w-xl py-4 font-light text-justify ">
                    {t(SOBRE)}
                </p>
                <div className="flex justify-center gap-4 text-lg">
                    <button className="rounded-xl bg-blue-700 hover:bg-blue-600 p-4">Entre em contato</button>
                    <button className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4">Download CV</button>
                </div>
            </div>
        </section>
    )
}

        // <section className="border-b border-neutral-900 pb-4 lg:mb-35">
        //     <div className="flex justify-around flex-col gap-4 md:flex-row items-center">
        //         <img src={IMG_URL} alt="" className="rounded-2xl max-h-64 max-w-64"/>
        //         <article className="">
        //             <h2 className="text-2xl">{t('cargo')}</h2>
        //             <p className="my-2 max-w-xl py-4 font-light text-justify ">
        //                 {t('sobre')}
        //             </p>
        //         </article>
        //     </div>
        // </section>

{/* <div className="flex flex-wrap">
<div className="w-full lg:w-1/2">
    <div className="flex flex-col items-center lg:items-start">
        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Igor Bonfim
        </h1>
        <span className="bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-4xl tracking-tight text-transparent">
            {t('cargo')}
        </span>
        <p className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter">
            {t('sobre')}
        </p>
    </div>
</div>
<div className="w-full lg:w-1/2 lg:p-8">
    <div className="flex justify-center">
        <img className="rounded-2xl" src={IMG_URL} alt="" />
    </div>
</div>
</div> */}