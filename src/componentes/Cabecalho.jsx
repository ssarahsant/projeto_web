import estilos from './Cabecalho.module.css'

// Importação do Icone
import { FilmReel, FilmStrip } from '@phosphor-icons/react'

export function Cabecalho () {
    // Considerando que esse componente é unicamente para o cabeçalho 
        // a tag retornada será header
    return (
        <header className={estilos.conteiner}>
            <FilmReel 
            size={38}
            color='#dcdcdd'/>
            <p>Recomendações</p>
            <FilmStrip
            size={38}
            color='#dcdcdd'/>

        </header>
    )
}
