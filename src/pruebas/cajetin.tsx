import React, { Component } from "react";


interface CajetinState {

    lleno: string

}

interface CajetinProps {

    color: string

}

export class Cajetin extends Component<CajetinProps, CajetinState> {

    constructor( props: CajetinProps ){

        super (props)

        this.state = {

            lleno: "si"

        }

    }

    render() {

        return(

            <div>

               {this.state.lleno}

            </div>

        )

    }

}