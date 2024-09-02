import { Artigo } from "../types/artigo";
import binarySearcImg from "../assets/Images/binarySearch.webp"

const binarySearch: Artigo = {
    titulo: "artigos.buscaBinaria.titulo",
    descricao: "artigos.buscaBinaria.descricao",
    imagem: binarySearcImg,
    link: "https://medium.com/@igorbonfim/algoritmos-busca-bin%C3%A1ria-5c665534f0c6"
}

export const ARTIGOS_EM_DESTAQUE: Artigo[] = [
    binarySearch
];

export const ARTIGOS: Artigo[] = [
    ...ARTIGOS_EM_DESTAQUE,
]