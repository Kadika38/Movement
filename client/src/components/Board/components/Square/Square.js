import React, { useState } from "react";
import "../../style.css";

export default function Square(props) {
    const width = 30 - (props.left ? 1 : 0) - (props.right ? 1 : 0);
    const height = 30 - (props.top ? 1 : 0) - (props.bottom ? 1 : 0);

    return (
        <div style={{borderLeft:(props.left ? "solid" : "none"), borderTop:(props.top ? "solid" : "none"), borderRight:(props.right ? "solid" : "none"), borderBottom:(props.bottom ? "solid" : "none"), borderWidth:"1px", width:(width === 30 ? "30px" : (width === 29 ? "29px" : "28px")), height:(height === 30 ? "30px" : (height === 29 ? "29px" : "28px"))}}>
            
        </div>
    );
};