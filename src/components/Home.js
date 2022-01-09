import React from 'react'
import { useState } from 'react'
import { ImageMap } from '@qiuz/react-image-map'

import Playlist from '../components/Playlist'
import AudioPlayer from './AudioPlayer'
import Sewing from './Sewing'
import ClothingDisplay from './ClothingDisplay'
import Bookshelf from './Bookshelf'
import Booklist from './Booklist'
import About from './About'

import Room from '../assets/imgs/room.png'
import RoomDark from '../assets/imgs/room-dark.png'

import Profile from '../assets/imgs/portfolio_photo.png'
import Sparkle from '../assets/imgs/sparkle.gif'

import '../style/Base.css'
import '../style/Home.css'


const Home = () => {
    const [lightMode, setLightMode] = useState(false)
    const [showPlaylist, setShowPlaylist] = useState(false)
    const [playAudio, setPlayAudio] = useState(false)
    const [audioFile, setAudioFile] = useState('')
    const [showSewing, setShowSewing] = useState(false)
    const [displayClothing, setDisplayClothing] = useState(false)
    const [clothing, setClothing] = useState('')
    const [showBookshelf, setShowBookshelf] = useState(false)
    const [displayList, setDisplayList] = useState(false)
    const [year, setYear] = useState('')

    const [audioText, setAudioText] = useState(false)
    const [visualText, setVisualText] = useState(false)
    const [craftText, setCraftText] = useState(false)
    const [readingText, setReadingText] = useState(false)

    const [showText, setShowText] = useState(false)

    const audio_files = ['ascend.mp3', 'breath.mp3', 'clouds.mp3', 'daydreamer.mp3', 'hope.mp3', 'human-sadness.mp3', 'meadows.mp3', 'moonjuice.mp3', 'rain.mp3', 'someday.mp3', 'wsfat.mp3']
    const audio_titles = ['i. Ascend', 'ii. Breath', 'iii. Clouds', 'iv. Daydreamer', 'v. Hope', 'vi. Human Sadness (granular synthesis of a Julian Casablancas demo)', 'vii. Meadows', 'viii. Moonjuice', 'ix. Rain', 'x. Someday', 'xi. What\'s so Funny Around Town']

    const mapArea = [
        // SPARKLES //

        // tv sparkles //
        {
            "width": "1.729528535980149%",
            "height": "1.779411764705882%",
            "left": "38.88166873449132%",
            "top": "20%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '12vh' }} />
                )
            }
        },
        {
            "width": "1.1395348837209305%",
            "height": "1.8620689655172415%",
            "left": "67.39147274993186%",
            "top": "22.89655172413793%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '9vh' }} />
                )
            }
        },
        {
            "width": "2.1395348837209305%",
            "height": "3.5862068965517238%",
            "left": "40.01937972667606%",
            "top": "35.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width": "2.1395348837209305%",
            "height": "3.5862068965517238%",
            "left": "53.01937972667606%",
            "top": "52.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width": "2.1395348837209305%",
            "height": "3.5862068965517238%",
            "left": "10.01937972667606%",
            "top": "30.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '5vh' }} />
                )
            }
        },
        {
            "width": "2.1395348837209305%",
            "height": "3.5862068965517238%",
            "left": "12.01937972667606%",
            "top": "26.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '5vh' }} />
                )
            }
        },
        // Labels //
        {
            "width":"12%",
            "height":"4%",
            "left":"46%",
            "top":"18%",
            render: () => {
                return (
                    visualText && <h1 style={{fontFamily: 'Grand_Aventure', color:'#ffc40c', fontSize: '3vh'}}>Visual Projects</h1>
                )
            }
        },
        {
            "width":"6%",
            "height":"4%",
            "left":"70%",
            "top":"28%",
            render: () => {
                return (
                    audioText && <h1 style={{fontFamily: 'Grand_Aventure', color:'#ffc40c', fontSize: '3vh'}}>Audio Projects</h1>
                )
            }
        },
        {
            "width":"6%",
            "height":"4%",
            "left":"36%",
            "top":"45%",
            render: () => {
                return (
                    craftText && <h1 style={{fontFamily: 'Grand_Aventure', color:'#ffc40c', fontSize: '3vh'}}>Crafts</h1>
                )
            }
        },
        {
            "width":"16%",
            "height":"4%",
            "left":"56%",
            "top":"64%",
            render: () => {
                return (
                    readingText && <h1 style={{fontFamily: 'Grand_Aventure', color:'#ffc40c', fontSize: '3vh'}}>Reading List</h1>
                )
            }
        },
        // TV //
        {
            "width": "15.75682382133995%",
            "height": "18.602941176470587%",
            "left": "43.2285980148883%",
            "top": "24.65441176470588%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
            onMouseOver: () => {
                setVisualText(true)
            },
            onMouseOut: () => {
                setVisualText(false)
            }
        },
        // lamp //
        {
            "width": "3.8929440389294405%",
            "height": "12.996389891696749%",
            "left": "10.67898418491484%",
            "top": "22.3826714801444%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",

        },
        // books //
        {
            "width": "14.355231143552311%",
            "height": "12.274368231046932%",
            "left": "54.23129562043796%",
            "top": "52.34657039711191%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
            onMouseOver: () => {
                setReadingText(true)
            },
            onMouseOut: () => {
                setReadingText(false)
            }

        },
        // sewing //
        {
            "width": "10%",
            "height": "7.581227436823104%",
            "left": "32.57679440389295%",
            "top": "37%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
            onMouseOver: () => {
                setCraftText(true)
            },
            onMouseOut: () => {
                setCraftText(false)
            }
        },
        // record right //
        {
            "width": "10%",
            "height": "17.830882352941178%",
            "left": "60.3556141439206%",
            "top": "26%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
            onMouseOver: () => {
                setAudioText(true)
            },
            onMouseOut: () => {
                setAudioText(false)
            }
        },
        {
            "width": "14.516129032258066%",
            "height": "20.772058823529413%",
            "left": "9.72782258064516%",
            "top": "54.96323529411765%",
            "className":  "image-map__map usage-map cursor_map_span-0 ",
            render: () => {
                return (
                    showSewing && displayClothing && <ClothingDisplay clothing={clothing} />
                )
            }
        },
        {
            "width": "100%",
            "height": "1%",
            "left": "1.72782258064516%",
            "top": "91.96323529411765%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    <h1 className="cursor" style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '2.2vh' }}>photos courtesy of unsplash, photoshopped/edited by me!</h1>
                )
            }
        },
        {
            "width": "12%",
            "height": "15%",
            "left": "17%",
            "top": "27%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <div className="frame" id="grow" style={{ display: 'flex', justifyContent: 'center', borderRadius: '2vh', height: '100%', width: '100%' }}>
                        <img className="image" src={Profile} style={{ borderRadius: '2vh', height: '92%', width: '92%' }}
                            onClick={() => setShowText(true)} />
                    </div>
                )
            }
        },
    ];
    const onMapClick = (area, index) => {
        if (index == 10) {
            window.location.href = '/digital-space/#/digital'
        }
        if (index == 11) {
            setLightMode(prevLightMode => !prevLightMode)
        }
        if (index == 12) {
            setShowBookshelf(true)
        }
        if (index == 13) {
            setShowSewing(true)
        }
        if (index == 14) {
            setShowPlaylist(true)
        }
        console.log(`pressing ${index}`)
    }
    const showAudio = (title) => {
        setPlayAudio(true)
        setAudioFile(audio_files[audio_titles.indexOf(title)])
    }
    const showClothing = (clothing) => {
        setDisplayClothing(true)
        setClothing(clothing)
    }
    const showList = (year) => {
        setDisplayList(true)
        setYear(year)
    }
    return (
        <div>
            <ImageMap
                style={{ margin: "1px", height: '100vh', width: '100%' }}
                className="usage-map cursor"
                src={lightMode ? RoomDark : Room}
                map={mapArea}
                onMapClick={onMapClick}>
            </ImageMap>
            <h1 className="cursor" style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '2.5vw', position: 'absolute', top: '9.8%', left: '37.75vw' }}>welcome to my digital home</h1>
            {showPlaylist && <Playlist clickingX={() => {
                setShowPlaylist(false)
            }} showAudio={(title) => showAudio(title)} />}
            { playAudio && <AudioPlayer file={audioFile} clickingX={() => setPlayAudio(false)}/>}

            {showSewing && <Sewing clickingX={() => {
                setShowSewing(false)
                setDisplayClothing(false)
            }} showClothing={(clothing) => showClothing(clothing)} />}
            {showBookshelf && <Bookshelf clickingX={() => {
                setShowBookshelf(false)
                setDisplayList(false)
            }} showYear={(year) => showList(year)} />}
            {showBookshelf && displayList && <Booklist year={year} />}
            {showText && <About clickingX={() => setShowText(false)}/>}
        </div>
    )
}

export default Home;