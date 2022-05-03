import React, { Component } from "react";

interface relojState {
    date: Date;
    color: string;
}

export class Reloj extends Component<{}, relojState> {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            color: "",
        };
    }

    componentDidMount() {
        //Ejecutará cada segundo el método tick para mostrar la hora cada segundo en el DOM

        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        //Si eliminamos el componente clock del ReactDom, parará el funcionamiento
        window.clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="contenedor-reloj">
                <h1>Reloj Actual</h1>
                <h2 className="hora">
                    {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }

    private timerID: number;
}
