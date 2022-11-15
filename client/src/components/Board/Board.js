import React from "react";
import Square from "./components/Square/Square";
import "./style.css";

export default function Board() {
    //begin by creating an array of arrays representing the board
    const wide = 10;
    const high = 10;
    const mapper = [];
    for (let i = 0; i < high; i++) {
        mapper.push([]);
    }

    const randBool = () => {
        return (Math.random() >= 0.5);
    };

    for (let i = 0; i < high; i++) {
        for (let j = 0; j < wide; j++) {
            (i === 0 && j === 0) ? mapper[i].push(false) : mapper[i].push(randBool());
        }
    }

    return (
        <div className="board-outer">
            {mapper.map((row) => {
                return (
                    row.map((sq) => {
                        return (
                            <Square wall={sq}></Square>
                        )
                    })
                )
            })}
        </div>
    );
};