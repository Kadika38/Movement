import React, { useState } from "react";
import "./style.css";
import Board from "../../components/Board/Board";

export default function Main() {

    return (
        <div className="mainContainer">
            <div className="subContainer">
                <div className="column">
                    <Board></Board>
                </div>
                <div className="column">
                    <Board></Board>
                </div>
            </div>
        </div>
    );
};