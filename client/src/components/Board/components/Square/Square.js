import React, { useState } from "react";
import "../../style.css";

export default function Square(props) {

    return (
        <div className="square" style={{borderLeft:(props.left ? "solid" : "none"), borderTop:(props.top ? "solid" : "none"), borderRight:(props.right ? "solid" : "none"), borderBottom:(props.bottom ? "solid" : "none"), borderWidth:"1px"}}>
            
        </div>
    );
};