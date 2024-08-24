import { useTranslation } from "react-i18next"

interface TecnologiaExperienciaProps {
    index: number,
    tecnologia: string
} 

export default function TecnologiaExperiencia({index, tecnologia}: TecnologiaExperienciaProps) {
    return (
        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800">
            {tecnologia}
        </span>
    )
}