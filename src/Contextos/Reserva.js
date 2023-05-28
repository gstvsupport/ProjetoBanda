import { createContext, useContext, useState } from "react";

export const ReservaContext = createContext();
ReservaContext.displayName = "Reserva";

export default function ReservaProvider({ children }) {
    const [reserva, setReserva] = useState([]);
    return (
        <ReservaContext.Provider
            value={{ reserva, setReserva }}>
            {children}
        </ReservaContext.Provider>
    )
}

export function useReservaContext() {
    const { reserva, setReserva } = useContext(ReservaContext);

    function adicionarReserva(novaReserva) {
        const reservaRepetida = reserva.some(item => item.id === novaReserva.id);
        let listaNova = [...reserva];

        if (!reservaRepetida) {
            listaNova.push(novaReserva);
            return setReserva(listaNova);
        }
        listaNova = reserva.filter((res) => res.id !== novaReserva.id);
        return setReserva(listaNova);
    }
    return {
        reserva,
        adicionarReserva
    }
}