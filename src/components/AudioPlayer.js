import React from 'react'
import { useState } from 'react';
import '../style/Base.css'

const AudioPlayer = (props) => {
    const [playing, setPlaying] = useState(true)
    var file = props.file
    var clickingX = props.clickingX
    return (
        <div className="cursor"
            style={{ position: 'absolute', top: '.4vh', left: '5vw', height: '0.8vh', padding: '2vw', backgroundColor: '#e091a7', border: '1px solid #ab283f' }}
        >
            {!playing && <h1 className="cursor-hover"
                style={{ display: 'inline', paddingTop: '2px', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: 'white', fontSize: '1.5vh', }}
                onClick={() => {
                    document.getElementById('audio').play()
                    setPlaying(true)
                }}>
                play {file}?
            </h1>}
            {playing && <h1 className="cursor-hover"
                style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: 'white', fontSize: '1.5vh', }}
                onClick={() => {
                    document.getElementById('audio').pause()
                    setPlaying(false)
                }}>
                pause {file}?
            </h1>}
                <div className="cursor-hover" style={{ top: '.5vh', right: '.3vw', position: 'absolute', border: '1px solid #ab283f', backgroundColor: '#e091a7',  display: 'inline' }}>
                    <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', }}
                        onClick={clickingX}>
                        &nbsp;X&nbsp;
                    </h1>
                </div>
            <audio id="audio" src={`./audio/${file}`} autoPlay={true}>
                Your browser does not support the <code>audio</code> element.
            </audio>
        </div>
    )
}

export default AudioPlayer;
