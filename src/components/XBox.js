import React from 'react'

import '../style/Base.css'
const XBox = (props) => {
    const colorBackground = props.colorBackground
    const colorBorder = props.colorBorder
    const clickingX = props.clickingX
    console.log(colorBackground)
    return (
        <div className="cursor-hover x-box" id="XBox" style={{ width: '3vw', height: '3vw', position: 'absolute', top: '1vh', right: '1vw', display: 'flex', justifyContent: 'center', border: `.5vh solid ${colorBorder}`, backgroundColor: `${colorBackground}`, boxSizing: 'border-box' }} 
        onClick={clickingX}>
            <h1 style={{ fontFamily: 'Bohemian', fontSize: '2vw', color: `${colorBorder}`, padding: '0', margin: '0' }}>X</h1>
        </div>
    )
}
export default XBox;