import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ptBrJSON from '.././assets/languages/ptBr.json'
import enUsJSON from '.././assets/languages/enUs.json'

i18n.use(initReactI18next).init({
 resources: {
    ptBr: { ...ptBrJSON },
    enUs: { ...enUsJSON }
 }, // Where we're gonna put translations' files
 lng: "ptBr",     // Set the initial language of the App
});