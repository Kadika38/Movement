import React, { useState } from "react";
import Square from "./components/Square/Square";
import "./style.css";

export default function Board() {
    const wide = 10;
    const long = 10;
    const mapper = [];
    for (let i = 0; i < (long * wide); i++) {
        let one = Math.random() >= 0.5;
        let two = Math.random() >= 0.5;
        let three = Math.random() >= 0.5;
        let four = Math.random() >= 0.5;
        mapper.push([one, two, three, four]);
    };

    return (
        <div className="board-outer">
            {mapper.map((sq) => {
                return (
                    <Square left={sq[0]} top={sq[1]} right={sq[2]} bottom={sq[3]}></Square>
                )
            })}
        </div>
    );
};