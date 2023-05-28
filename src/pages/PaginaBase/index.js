import FavoritosProvider from "Contextos/Favoritos";
import ReservaProvider from "Contextos/Reserva";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <ReservaProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </ReservaProvider>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}
export default PaginaBase;