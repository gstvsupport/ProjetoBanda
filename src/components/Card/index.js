import { useFavoritoContext } from 'Contextos/Favoritos';
import { useReservaContext } from 'Contextos/Reserva';
import styles from './Card.module.css';
import iconeDesfavoritar from './favoritar.png';
import iconeFavoritar from './desfavoritar.png';
import { Link, useLocation } from 'react-router-dom';

function Card({ id, titulo, capa, local, horario }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const { reserva, adicionarReserva } = useReservaContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const ehReserva = reserva.some((res) => res.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    const button = !ehReserva ? 'Reservar' : 'Reservado';
    const location = useLocation();

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
                <h2>{local}</h2>
                <h2>{horario}</h2>
            </Link>
            <div className={styles.flex}>
                {
                    location.pathname === '/Perfil' ? '' :
                        <img src={icone}
                            alt="Favoritar filme"
                            className={styles.favoritar}
                            onClick={() => {
                                adicionarFavorito({ id, titulo, capa, local, horario })
                            }} />
                }
                {
                    location.pathname === '/Favoritos' ? '' :
                        <button
                            className={styles.button}
                            onClick={() => {
                                adicionarReserva({ id, titulo, capa, local, horario })
                            }}>{button}
                        </button>
                }

            </div>
        </div>

    )
}

export default Card;