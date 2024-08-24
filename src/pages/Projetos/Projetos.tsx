import useProjetosModel from "./ProjetosModel"
import ProjetosView from "./ProjetosView";

export default function Projetos() {

    const projetosModel = useProjetosModel();

    return (
        <ProjetosView {...projetosModel}></ProjetosView>
    )
  }