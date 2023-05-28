import { useReservaContext } from "Contextos/Reserva";
import Card from 'components/Card';
import Titulo from "components/Titulo";
import styles from './Perfil.module.css'

export default function Perfil(){
    const { reserva } = useReservaContext();
    return (
        <>
            <Titulo>
                <h1>Minhas reservas</h1>
            </Titulo>
            <div className={styles.favoritos}>
                <section className={styles.container}>
                    {reserva.map((res) => {
                        return <Card {...res} key={res.id} />
                    })}
                </section>
            </div>
        </>
    )
}