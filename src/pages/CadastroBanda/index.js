import { Link } from 'react-router-dom'
import styles from './Cadastro.module.css'

export default function CadastroBanda(){
    return(
        <>
            <main>
                <Link to={'/'}>Voltar</Link>
                <div className={styles.container}>
                    <form className={styles.formCadastro}>
                        <h1>Cadastro Banda</h1>
                        <input type='text' placeholder='Nome da banda'/><br />
                        <input type='text' placeholder='Genero'/><br />
                        <input type='email' placeholder='email'/><br />
                        <input type='text' placeholder='Quantos membros?'/><br />
                        <input type='password' placeholder='Senha:'/><br />
                        <button>Cadastrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}