import { Link } from 'react-router-dom'
import styles from './CadastroWho.module.css'

export default function CadastroWho(){
    return(
        <>
            <main>
                <Link to={'/'}>Voltar</Link>
                <div className={styles.container}>
                    <div>
                        <Link to={'/CadastroEspectador'}>Espectador</Link><br/>
                        <Link to={'/CadastroBanda'}>Banda</Link>
                    </div>
                </div>
            </main>
        </>
    )
}