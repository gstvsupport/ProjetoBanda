import { useEffect, useState } from 'react';
import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { Link, useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';

function Player() {
    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/daniellensousa/cineTag/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            {/* <Banner imagem="player" /> */}
            <Titulo>
                <h1>Informações do show</h1>
            </Titulo>
            <section className={styles.container}>
                <img src={video.capa}/>
                <p>{video.titulo}</p>
                <p>{video.local}</p>
                <p>{video.horario}</p>
            </section>
        </>
    )
}
export default Player;