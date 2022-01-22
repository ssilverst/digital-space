import React from 'react'
import '../style/Base.css'

const HelpTV = (props) => {
    const { helpText, clickingX } = props
    console.log(props.helpText)
    const renderedText = helpText.map((sentence) => {
        return (
            <p className="cursor-hover" style={{ fontFamily: 'Bohemian', fontSize: '1.8vh', fontWeight: '900', color: '#000', }}>
                {sentence}
            </p>
        )
    })
    return (
        <div className="cursor-hover" style={{ position: 'absolute', bottom: '5vh', width: '70vw', left: '15vw' }}>
            <div className="cursor-hover"style={{ borderLeft: '.4vw dashed #729AC9', borderRight: '.4vw dashed #F787DF', borderTop: '.4vw dashed #87F7A7', borderBottom: '.4vw dashed #8A87F7', borderRadius: "3vw", backgroundColor: '#fff', padding: '.9vw'}} onClick={clickingX}>
                {renderedText}
            </div>
        </div>
    )
}

export default HelpTV;