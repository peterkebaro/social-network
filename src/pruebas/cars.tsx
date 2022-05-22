import React, { Component } from "react";

interface CarsState {
    brand: string;
    price: number;
}

interface Data {
    car: string;
    priceCar: number;
}
interface CarsProps {
    carsData: Data[];
}
export class Cars extends Component<CarsProps, CarsState> {
    constructor(props: CarsProps) {
        super(props);
        this.state = {
            brand: "",
            price: 0,
        };
    }

    addNewCar() {
        const newCar: Data = {
            car: this.state.brand,
            priceCar: this.state.price,
        };

        this.props.carsData.push(newCar);

        this.setState({
            brand: "",
            price: 0,
        });
    }

    deleteCar() {}

    editCar() {}

    render() {
        const { carsData } = this.props;

        return (
            <div>
                <br />
                <h1>Stock de coches</h1>
                <br />
                <div>
                    <input
                        placeholder="Car Brand"
                        value={this.state.brand}
                        onChange={(event) =>
                            this.setState({ brand: event.target.value })
                        }
                    />
                    <br />
                    <input
                        placeholder="Car Price"
                        type="number"
                        value={this.state.price}
                        onChange={(event) =>
                            this.setState({ price: event.target.valueAsNumber })
                        }
                    />
                    <br />
                    <button onClick={() => this.addNewCar()}>
                        {" "}
                        Register Car
                    </button>
                    <br />
                </div>
                <div className="stockCarList">
                    Stock List: <br />
                    {carsData.map((element) => (
                        <li key={element.car}>
                            {" "}
                            Brand: {element.car} - Price: {element.priceCar}{" "}
                            euros
                            <button onClick={() => this.editCar()}>
                                Editar
                            </button>
                            <button onClick={() => this.deleteCar()}>
                                Borrar
                            </button>
                        </li>
                    ))}
                    <br />
                </div>
            </div>
        );
    }
}
