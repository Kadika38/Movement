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
            mapper[i].push("white");
        }
    }

    const route = () => {
        //find the shortest route from start to finish
        const boardWidth = 10;
        const boardHeight = 10;
        const start = [0, 0];
        const end = [9, 9];
        const allRoutes = [];
        let current = start;

        //step by step process
        let routeHolder = [start];
        while (current !== end) {
            //find next square to move to...
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