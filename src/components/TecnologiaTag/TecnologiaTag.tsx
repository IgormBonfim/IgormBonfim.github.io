interface TecnologiaExperienciaProps {
    tecnologia: string
} 

export default function TecnologiaTag({tecnologia}: TecnologiaExperienciaProps) {
    return (
        <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800">
            {tecnologia}
        </span>
    )
}