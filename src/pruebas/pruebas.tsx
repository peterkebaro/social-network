import React, { Component } from "react";
import { Counter } from "./contador";
import { Buscador } from "./buscador";
import { Reloj } from "./reloj";
import { TablaN } from "./tablan";
import { Cajetin } from "./cajetin";

export function Pruebas() {
    return (
        <div>
            <h1 id="1" className="css">
                Hola mundo desde React
            </h1>
            <Counter startOn={5} />
            <Buscador />
            <Reloj />
            {/* <TablaN size={3}/> */}
            <Cajetin color="verde" />
        </div>
    );
}
