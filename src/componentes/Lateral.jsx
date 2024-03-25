import estilos from './Lateral.module.css'

export function Lateral () {
    // Considerando que esse componente é unicamente para a lateral 
    // a tag retornada será aside
    return (
        <aside className={estilos.conteiner}>
        
            <img 
            className={estilos.imagemCabecalho}
            src='https://images.unsplash.com/photo-1533559783038-ae4fab329628?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        

            <div className={estilos.perfil}>
                <img 
                className={estilos.avatar}
                src="https://avatars.githubusercontent.com/u/110640625?v=4" />

                <p>Sarah Santos</p>
            </div>
            
        </aside>
    )
}
