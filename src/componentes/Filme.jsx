import estilos from './Filme.module.css'

// Importar a imagem que está na pasta e renomear
import poster from '../assets/poster.webp'

// Importação do Ccomponente Card (para inserir os dados do filme)
import { Card } from './Card'

export function Filme() {
    // adiciona a imagem através da nomeação aplicada na importação
    return (
        <Card>
            <figure className={estilos.conteiner}>
            <img src={poster} />
            <figcaption>Lucifer (2016)</figcaption>
            <p>Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.</p>
            <p>85%</p>
        </figure>
        </Card>
    )
}