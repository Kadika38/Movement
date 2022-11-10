import React, { useState } from "react";
import Square from "./components/Square/Square";
import "./style.css";

export default function Board() {
    //begin by creating an array of arrays representing the board
    const wide = 10;
    const high = 10;
    const mapper = [];
    const finalMapper = [];
    const startEmpty = [];
    for (let i = 0; i < high; i++) {
        mapper.push(startEmpty);
    }

    const randBool = () => {
        return (Math.random() >= 0.5);
    };

    //create the first square entirely randomly
    //all sqaures are [left, top, right, bottom]
    mapper[0].push([true, true, randBool(), randBool()]);
    finalMapper.push(mapper[0][0]);

    //add in the rest based on the first square
    for (let y = 0; y < high; y++) {
        for (let x = 0; x < wide; x++) {
            let holder = [];
            if (y > 0 || x > 0) {
                //check sides
                //left
                if (x > 0) { //if not on left side of board, copy the right border of the square to the left of the current square
                    holder.push(mapper[y][x-1][2]);
                } else {
                    holder.push(true);
                }
                //top
                if (y > 0) { //if not on top of board, copy the bottom border of the square above the current square
                    holder.push(mapper[y-1][x][3]);
                } else {
                    holder.push(true);
                }
                //right
                if (x < wide-1) { //if not on right side of board, random border
                    holder.push(randBool());
                } else {
                    holder.push(true);
                }
                //bottom
                if (y > high-1) { //if not on bottom of board, random border
                    holder.push(randBool());
                } else {
                    holder.push(true);
                }
                mapper[y][x] = holder;
                finalMapper.push(holder);
            }
        }
    }

    return (
        <div className="board-outer">
            {finalMapper.map((sq) => {
                return (
                    <Square left={sq[0]} top={sq[1]} right={sq[2]} bottom={sq[3]}></Square>
                )
            })}
        </div>
    );
};