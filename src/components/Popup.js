import React from 'react'
import '../style/Base.css'
import unityIcon from '../assets/imgs/digital/unity-icon.png'
import artProgrammingIcon from '../assets/imgs/digital/art-programming-icon.png'
import miscIcon from  '../assets/imgs/digital/misc-icon.png'
import videoWorksIcon from '../assets/imgs/digital/video-works-icon.png'
import pixelIcon from '../assets/imgs/digital/pixel-icon.png'
import photoshopIcon from  '../assets/imgs/digital/photoshop-icon.png'

const Popup = (props) => {
    const channelImages = [unityIcon, artProgrammingIcon, miscIcon, videoWorksIcon, pixelIcon, photoshopIcon]
    const { popupText, clickingX, channelIdx } = props
    console.log(props.popupText)
    const renderedText = popupText.map((sentence) => {
        return (
            <p className="cursor" style={{ fontFamily: 'Bohemian', fontSize: '1.8vh', fontWeight: '900', color: '#000', }}>
                {sentence}
            </p>
        )
    })
    return (
        <div className="cursor-hover" style={{ position: 'absolute', top: '5vh', opacity: '98%', width: '80vw', height: '90vh', left: '10vw', border: '1vh dotted #7FA0F4', boxSizing: 'border-box', borderRadius: "3vw", backgroundColor: '#eee', padding: '.9vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={clickingX}>
            <div style={{ width: '50%' }} >
                {renderedText}
            </div>
            <img src={channelImages[channelIdx]} style={{width: '30vh', height: '40vh'}} />
        </div>
    )
}

export default Popup;