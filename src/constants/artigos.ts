import { Artigo } from "../types/artigo";
import teste from "../assets/Images/teste.webp"

const binarySearch: Artigo = {
    titulo: "Algoritmos: Busca Binária",
    descricao: "Artigo sobre o algoritmo de Busca Binária, com implementação na lingugagem Golang.",
    imagem: teste,
    link: "https://medium.com/@igorbonfim/algoritmos-busca-bin%C3%A1ria-5c665534f0c6"
}

export const ARTIGOS_EM_DESTAQUE: Artigo[] = [
    binarySearch
];

export const ARTIGOS: Artigo[] = [
    ...ARTIGOS_EM_DESTAQUE,
]