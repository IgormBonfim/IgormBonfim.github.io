import useProjetosModel from "./ProjetosModel"
import ProjetosView from "./ProjetosView";

export default function ProjetosPage() {

    const projetosModel = useProjetosModel();

    return (
        <ProjetosView {...projetosModel}></ProjetosView>
    )
  }