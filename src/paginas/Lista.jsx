// Importação do componente
import { Filme } from '../componentes/Filme'
import estilos from './Lista.module.css'

export function Lista() {
    return (
        <main className={estilos.conteiner}>
            <Filme/>
        </main>
    )
}
