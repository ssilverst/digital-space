import React from 'react'

import '../style/Home.css'
import '../style/Base.css'

import Profile from '../assets/imgs/portfolio_photo.png'
import Halle from '../assets/imgs/halle_portfolio.jpeg'
import XBox from './XBox'
const About = (props) => {
    const {clickingX} = props
    return (
        <div className="cursor" style={{ width: '100vw', height: '100vh', backgroundColor: '#666', position: 'absolute', opacity: '90%', top: '0', left: '0', border: '1vh dotted #7FA0F4', boxSizing: 'border-box' }}>

            <img src={Halle} style={{ display: 'inline', opacity: '100%', marginLeft: '15vw', marginTop: '5vh', width: '20vw', border: '2vh solid cornflowerblue'}} />
            <img src={Profile} style={{display: 'inline', marginLeft: '10vw', width: '30vw', border: '2vh solid cornflowerblue'}} />
            <h1 className="text" style={{ fontFamily: 'Bohemian', fontSize: '2vh', fontWeight: '700', color: '#ffc40c', padding: '5vh'  }}>
                Sam here: First I'd like to thank you for stopping by and sharing my space! I love the idea of creating small worlds for people to go off to and explore. I am a fervent animal and plant lover, I love going to art museums, and learning about history. A self proclaimed code monkey, I love making apps, websites and games. I'm currently studing for a master's in Computer Science at Stanford. In my free time I love making and discovering art both digitally and tangibly. Although classically trained in violin, I have started experimenting with different forms and enjoy jazz, soul, and dreamscape.
            </h1>
            <XBox colorBackground={"aliceblue"} colorBorder={"cornflowerblue"} clickingX={clickingX} />
        </div>


    )
}

export default About;