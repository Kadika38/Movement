import React from "react";
import "../../style.css";

export default function Square(props) {

    return (
        <div style={{borderLeft:"solid", borderTop:"solid", borderRight:"solid", borderBottom:"solid", borderWidth:"1px", width:"28px", height:"28px", backgroundColor:(props.color)}}>
            
        </div>
    );
};