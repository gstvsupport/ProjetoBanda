import { Link } from 'react-router-dom'
import styles from './Cadastro.module.css'

export default function CadastroEspectador(){
    return(
        <>
            <main>
                <Link to={'/'}>Voltar</Link>
                <div className={styles.container}>
                    <form className={styles.formCadastro}>
                        <h1>Cadastro Espectador</h1>
                        <input type='email' placeholder='Digite seu e-mail'/><br />
                        <input type='password' placeholder='Digite sua senha'/><br />
                        <input type='text' placeholder='idade'/><br />
                        <input type='text' placeholder='CPF:'/><br />
                        <input type='password' placeholder='Senha:'/><br />
                        <input type='text' placeholder='Telefone:'/><br />
                        <button>Cadastrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}