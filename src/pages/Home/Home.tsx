import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Sobre from "../../components/Sobre/Sobre";
import Tecnologias from "../../components/Tecnologias/Tecnologias";

export default function Home() {
    // const { t, i18n: {changeLanguage, language} } = useTranslation();
    // const [currentLanguage, setCurrentLanguage] = useState(language)
  
    // const handleChangeLanguage = () => {
    //   const newLanguage = currentLanguage === "ptBR" ? "enUS" : "ptBR";
    //   setCurrentLanguage(newLanguage);
    //   changeLanguage(newLanguage);
    // }

    return (
        <div className="container mx-auto px-8">
            <Navbar></Navbar>
            <main >
                <Sobre></Sobre>
                <Tecnologias></Tecnologias>
            </main>
            {/* <main >
                <h1>Bien Venido</h1>
                <div>
                    <h2>
                        Teste:
                        {t('specificKey')}
                    </h2>
                    <button className="px-4 py-2 bg-gray-500 text-blue-600 rounded" type='button' onClick={handleChangeLanguage}>Trocar</button>
                </div>
            </main> */}
        </div>
    )
}