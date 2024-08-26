import { useTranslation } from "react-i18next";
import useProjetosModel from "./ProjetosModel";

export default function ProjetosView({projeto}: ReturnType<typeof useProjetosModel>) {
  const { t } = useTranslation();

  return (
    <>
      <span>{t('tituloProjetos')}</span>
    </>
  )
}