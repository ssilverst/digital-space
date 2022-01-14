import React from 'react'
import { useState } from 'react'

import '../style/Base.css'
import { ImageMap } from '@qiuz/react-image-map'
import Rack from '../assets/imgs/rack.png'
const Sewing = (props) => {
    const clickingX = props.clickingX
    const showClothing = props.showClothing
    const [itemHover, setItemHover] = useState(0)
    const [hover, setHover] = useState(true)
    const mapArea = [
        {
            "width": "8.25%",
            "height": "69.67790262172284%",
            "left": "34%",
            "top": "27.490636704119854%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            onMouseOver: () => {
                hover && setItemHover(1)
            },
            onmouseleave: () => {
                setItemHover(0)
            }
        },
        {
            "width": "9.5%",
            "height": "73.40823970037454%",
            "left": "72.08203125%",
            "top": "26.591760299625467%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            onMouseOver: () => {
                hover && setItemHover(2)
            },
            onmouseout: () => {
                setItemHover(0)
            }
        },
        {
            "width": "7.5%",
            "height": "81.27340823970037%",
            "left": "60.33203124999999%",
            "top": "18.726591760299627%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            onMouseOver: () => {
                hover && setItemHover(3)
            },
            onmouseout: () => {
                setItemHover(0)
            }
        },
        {
            "width": "7.91796875%",
            "height": "73.78277153558052%",
            "left": "92.08203125%",
            "top": "26.217228464419474%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            onMouseOver: () => {
                hover && setItemHover(4)
            },
            onmouseout: () => {
                setItemHover(0)
            }
        },
        {
            "width": "8%",
            "height": "73.03370786516854%",
            "left": "4.08203125%",
            "top": "23.970037453183522%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            onMouseOver: () => {
                hover && setItemHover(5)
            },
            onmouseout: () => {
                setItemHover(0)
            }
        },
        {
            "width": "25%", 
            "height": "100%", 
            "top": "90%", 
            "left": "2%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <h1 style={{ fontFamily: 'Grand_Aventure', backgroundColor: 'taupe', color: '#ffc40c', fontSize: '2vh' }}>Projects with String!</h1>
                )
            }
        },
        {
            "width": "8%",
            "height": "3%",
            "left": "34%",
            "top": "0%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    itemHover===1 && 
                    <div style={{display:'flex', justifyContent: 'center',}}>
                        <h1 style={{ borderRadius: '.3vw', paddingLeft: '1vh', paddingRight: '1vh', fontSize: "3vh", backgroundColor: 'aliceblue', color: "#7fa0f4", fontFamily: "Bohemian"}}>!</h1>
                    </div>
                )
            }
        },
        {
            "width": "8%",
            "height": "3%",
            "left": "72.08203125%",
            "top": "0%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    itemHover===2 && 
                    <div style={{display:'flex', justifyContent: 'center',}}>
                        <h1 style={{ borderRadius: '.3vw', paddingLeft: '1vh', paddingRight: '1vh', fontSize: "3vh", backgroundColor: 'aliceblue', color: "#7fa0f4", fontFamily: "Bohemian"}}>!</h1>
                    </div>
                )
            }
        },
        {
            "width": "8%",
            "height": "3%",
            "left": "60.33203124999999%",
            "top": "0%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    itemHover===3 && 
                    <div style={{display:'flex', justifyContent: 'center',}}>
                        <h1 style={{ borderRadius: '.3vw', paddingLeft: '1vh', paddingRight: '1vh', fontSize: "3vh", backgroundColor: 'aliceblue', color: "#7fa0f4", fontFamily: "Bohemian"}}>!</h1>
                    </div>
                )
            }
        },
        {
            "width": "8%",
            "height": "3%",
            "left": "92.08203125%",
            "top": "0%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    itemHover===4 && 
                    <div style={{display:'flex', justifyContent: 'center',}}>
                       <h1 style={{ borderRadius: '.3vw', paddingLeft: '1vh', paddingRight: '1vh', fontSize: "3vh", backgroundColor: 'aliceblue', color: "#7fa0f4", fontFamily: "Bohemian"}}>!</h1>
                    </div>
                )
            }
        },
        
        {
            "width": "8%",
            "height": "3%",
            "left": "4.08203125%",
            "top": "0%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    itemHover===5 && 
                    <div style={{display:'flex', justifyContent: 'center',}}>
                        <h1 style={{ borderRadius: '.3vw', paddingLeft: '1vh', paddingRight: '1vh', fontSize: "3vh", backgroundColor: 'aliceblue', color: "#7fa0f4", fontFamily: "Bohemian"}}>!</h1>
                    </div>
                )
            }
        },
        {
            "width":"3.4739454094292808%",
            "height":"4.149377593360995%",
            "left":"97.08762406947892%",
            "top":"0.4522821576763485%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(

                    <div className="cursor-hover" style={{ position: 'relative', border: '1px solid #e99799', backgroundColor: '#e2d9f3', width: '3vh', height: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#e99799', fontSize: '1.5vh', }} onClick={clickingX}>
                            &nbsp;X&nbsp;
                        </h1>
                    </div>
                )
            }
        },
    ]
    return (
        <div style={{ position: 'absolute', bottom: '6vh', left: '30vw' }}>
            <ImageMap
                style={{ margin: "-10px", height: '47vh', width: '40vw'}}
                className="usage-map cursor"
                loading="lazy"
                src={Rack}
                map={mapArea}
                onMapClick={(area, index) => {
                    if (index < 5) {
                        showClothing(index)
                        setHover(false)
                    }
                    }}>
            </ImageMap>
        </div>
    )
}
export default Sewing;