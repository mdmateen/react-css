import React from 'react'

function Inline() {


    const mystyle = {
        color: "Green",
        backgroundColor: "lightBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <>
            <h1>Inline CSS</h1>

            <h1 style={mystyle}>Hello Mateen</h1>


            <h1 style={{ color: "Green" }} > My name is Mateen!</h1>
            <p style={{ backgroundColor: "lightgreen" }}>My name is Mohammad Matee.</p>
        </>
    )
}

export default Inline