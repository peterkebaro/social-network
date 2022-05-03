import React, { Component } from "react";
import {
    humanMove,
    ganadorPartida,
    init,
    ponerFicha,
    arrayInicio,
    casillasVacias,
} from "../tik-tak-toe/engine";
import Marmol from "./images/cuadricula.jpg";
import Player1 from "./images/player1.png";
import Player2 from "./images/player2.png";

interface TablaNState {
    tablero: number[][];
    winner: number;
}

interface TableNProps {
    size: number;
    onCancel: () => void;
}

const playerColor = {
    0: Marmol,
    1: Player1,
    2: Player2,
};

export class TablaN extends Component<TableNProps, TablaNState> {
    constructor(props: TableNProps) {
        super(props);
        this.state = {
            tablero: init(props.size),
            winner: 0,
        };
    }

    changeColor(fila: number, columna: number) {
        if (this.state.winner !== 0) return;

        let turn = humanMove(fila, columna);
        let winner = ganadorPartida();

        this.setState({
            tablero: turn,
            winner: winner,
        });
    }

    jugadaOrdenador() {
        let espacios: number[] = casillasVacias();
        const tablero = ponerFicha(espacios);
        //const tablero = bestMove (espacios)

        this.setState({
            tablero: tablero,
        });
    }

    render() {
        const { winner, tablero } = this.state;
        const { onCancel } = this.props;

        return (
            <div>
                <div className="boton-maquina">
                    {
                        <button onClick={() => this.jugadaOrdenador()}>
                            Empieza el ordenador
                        </button>
                    }
                </div>
                <div className="container tabla-n">
                    {tablero.map((fila, i) =>
                        fila.map((casilla, j) => (
                            <div
                                key={j + 2}
                                onClick={() => this.changeColor(i, j)}
                                // style={{ backgroundImage: "url(${playerColor[casilla]})" }}
                            >
                                <img src={playerColor[casilla]} width="50px" />
                            </div>
                        ))
                    )}
                </div>
                {winner !== 0 && (
                    <h2 className="winner">Ha ganado el jugador {winner}</h2>
                )}

                <button onClick={() => onCancel()}>Volver</button>
            </div>
        );
    }
}
