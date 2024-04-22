import { useState } from 'react'
import estilos from './Login.module.css'
 
export function Login(){
    // criação de state, internamente é um get e um set que faz a função de letiura
    // e alteração (a forma de alteração necessita do pre fixo set)
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    // função de manipulação dos valores inseridos no formulário
    function obterDadosFormulario(e) { 
        e.preventDefault()
        // temporário (porque os dados não estão sendo mandados para nenhum lugar, 
        //função que seia do action (que envia informações quando ocorre um submit), 
        // isso segura o compotamento padrão do formulário) impede o envio das informações
        // bloquando po refresh e possibilitando ver o console log
        console.log(`Usuário: ${usuario}`)
        console.log(`Senha: ${senha}`)
    } 
    
    //vinculando os componentes com s states atraves dp value (para que no input mostre o que tem armazenado no state
    // e cada input que existir no campo, será inserido dentro do state)
    // essa dinamica ocorre dentro de uma função usando o recurso do html de evento (abreviado pela letra E)
    // essa arrow functiont de event será utilizada a propriedade target (pega o elemtno html que está sendo utilizado 
    // naquele momento, indica o elemetno html que estpa sendo usado no momento)
    // event recomhece o movimentom, target identifca o elemeeto e value pega o valor inserido no input
    // isso tudo sertá inseitod no state
    // on change é o evento que reconhece asoperações
    return(
        <div className={estilos.conteiner}>
 
            <form className={estilos.formulario}
            onSubmit={obterDadosFormulario}>
 
                <input className={estilos.campo}
                placeholder="Usuario"
                value={usuario}
                onChange={ e => setUsuario(e.target.value)}
                />
                <input className={estilos.campo}
                placeholder="Senha"
                value={senha}
                onChange={ e => setSenha(e.target.value)}
                />
                <button
                className={estilos.botao}
                >Entrar</button>
            </form>
        </div>
    )
    // o submit e o reset são eventos padrões do formulário 
    // on submit reconhece o clique do botão que está no formulário 

}