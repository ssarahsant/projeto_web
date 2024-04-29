import estilos from './Lateral.module.css'
// importaçaõ do componente link da biblioteca router
import { Link } from 'react-router-dom'

export function Lateral () {
    // Considerando que esse componente é unicamente para a lateral 
    // a tag retornada será aside

    // criação de duas navegações
    
    // a tag link tem uma função chamada to, que cria um botão para inserir a rota
    return (
        <aside className={estilos.conteiner}>
            <header>
                <img 
                className={estilos.imagemCabecalho}
                src='https://images.unsplash.com/photo-1533559783038-ae4fab329628?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            

                <div className={estilos.perfil}>
                    <img 
                    className={estilos.avatar}
                    src="https://avatars.githubusercontent.com/u/110640625?v=4" />

                    <p>Sarah Santos</p>
                </div>
            </header>
            
            <section>
                <Link
                className={estilos.botao}
                to='/inical'>
                    Filmes
                </Link>

                <Link
                className={estilos.botao}
                to='perfil'>
                    Perfil
                </Link>

                <Link
                className={estilos.botao}
                to='sobre'>
                    Sobre
                </Link>
            </section>
            
        </aside>
    )
}
