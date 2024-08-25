import Sobre from "../../components/Sobre/Sobre";
import Tecnologias from "../../components/Tecnologias/Tecnologias";
import Experiencias from "../../components/Experiencias/Experiencias";
import Projetos from "../../components/Projetos/Projetos";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function HomePage() {
    // const { t, i18n: {changeLanguage, language} } = useTranslation();
    // const [currentLanguage, setCurrentLanguage] = useState(language)
  
    // const handleChangeLanguage = () => {
    //   const newLanguage = currentLanguage === "ptBR" ? "enUS" : "ptBR";
    //   setCurrentLanguage(newLanguage);
    //   changeLanguage(newLanguage);
    // }

    return (
        <>
            <Sobre></Sobre>
            <Tecnologias></Tecnologias>
            <Experiencias></Experiencias>
            <Projetos></Projetos>
        </>
    )
}