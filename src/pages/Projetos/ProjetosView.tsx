import useProjetosModel from "./ProjetosModel";

export default function ProjetosView({projeto}: ReturnType<typeof useProjetosModel>) {
  return (
      <header className="flex justify-center items-center p-4">
        <h1 className="text-4xl font-bold text-blue-600">Igor Bonfim</h1>
        <span className="px-4 py-2">
            teste
        </span>
        <span className="px-4 py-2">
            teste2
        </span>
        <span className="px-4 py-2">
            teste3
        </span>
        <span className="px-4 py-2">
            teste4
        </span>
      </header>
  )
}