import { Artigo } from "../types/artigo";
import binarySearcImg from "../assets/Images/binarySearch.webp"
import selectionSortImg from "../assets/Images/selectionSort.webp"

const binarySearch: Artigo = {
    titulo: "artigos.buscaBinaria.titulo",
    descricao: "artigos.buscaBinaria.descricao",
    imagem: binarySearcImg,
    link: "https://medium.com/@igorbonfim/algoritmos-busca-bin%C3%A1ria-5c665534f0c6"
}

const selectionSort: Artigo = {
    titulo: "artigos.selectionSort.titulo",
    descricao: "artigos.selectionSort.descricao",
    imagem: selectionSortImg,
    link: "https://medium.com/@igorbonfim/algoritmos-selection-sort-0fa0d6071656"
}

export const ARTIGOS_EM_DESTAQUE: Artigo[] = [
    binarySearch,
    selectionSort
];

export const ARTIGOS: Artigo[] = [
    ...ARTIGOS_EM_DESTAQUE,
]