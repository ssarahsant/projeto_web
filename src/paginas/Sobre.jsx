import estilos from './Sobre.module.css'

export function Sobre(){
    return(
    <main className={estilos.container}>
        <p className={estilos.titulo}>Sobre</p>
 
        <div className={estilos.principal}>
            <img className={estilos.avatar}
                        src="https://avatars.githubusercontent.com/u/110640625?v=4"
                        alt="img avatar"
            />
 
            <p className={estilos.nome}>Sarah da Silva dos Santos</p>
            <p>UX / UI Design</p>
            <p>Digital Solutions 08</p>
           
        </div>
    </main>
    )
   
}