import { useState } from "react"

export default function useProjetosModel() {
    const [projeto] = useState('')

    return {projeto}
}