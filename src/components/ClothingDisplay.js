import React from 'react'
import { useState } from 'react'

import '../style/Base.css'

const ClothingDisplay = (props) => {
    const clothing_files = ['cave-story', 'living-room-1', 'devil', 'halle', 'living-room-2', 'kuchi-kopi', 'shirt', ]
    const {clothing, clickingX} = props
    const [clothIdx, setClothIdx] = useState(clothing)
    return (
        <div className="cursor" style={{ borderRadius: '2vw', backgroundImage:`url('./sewing/pattern.png')`, width: '45vh', height: '45vh', position: 'absolute', bottom: '6vh', left: '35vw' }}>
            <img className="cursor-hover hover-element" src={`sewing/${clothing_files[clothIdx]}.png`} style={{ borderRadius: '2vw', boxSizing: 'border-box', width: '90%', height: '90%', position: 'absolute', left: '5%', top: '5%' }} 
            onClick={() => {
                setClothIdx((clothIdx+1)%clothing_files.length)
            }}
            />
            <div className="cursor-hover close-text" style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', border: '1vh solid black', position: 'absolute', right: '3vh', top: '1vh', width: '4vh', height: '4vh'}}>
                <h1  style={{fontFamily: 'Bohemian', fontSize: '3vh', color: 'black'}} onClick={clickingX}>x</h1>
            </div>
            <h1 className="cursor" style={{position: 'absolute', right: '4vh', bottom: '1vh', fontFamily: 'Bohemian', fontSize: '3vh', color: 'white'}}>click for next</h1>
        </div>
    )
}
export default ClothingDisplay;