import { t } from "i18next";
import useProjetosModel from "./ProjetosModel";

export default function ProjetosView({projeto}: ReturnType<typeof useProjetosModel>) {
  return (
    <>
      <span>{t('tituloProjetos')}</span>
    </>
  )
}