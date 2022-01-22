import React from 'react'
import { useState } from 'react'

import '../style/Base.css'
import { ImageMap } from '@qiuz/react-image-map'
import Notebook from '../assets/imgs/notebook.png'
const Booklist = (props) => {
    const { year, clickingX } = props
    const [listIdx, setListIdx] = useState(0)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [authorImg, setAuthorImg] = useState(false)
    const [authorVisible, setAuthorVisible] = useState(false)
    const books = [
        [["East of Eden", "The clocks", "House of stone", "Slaughterhouse-Five", "Blindness"],
        ["Useful Phrases for Immigrants", "Eleanor Oliphant Is Completely Fine", "I, Robot", "Rules For Visiting Kane"],
        ["All My Mother’s Lovers", "Oryx and Crake", "Everything I Never Told You"]],

        [["Chronicles of a Death Foretold", "Bright", "Metamorphosis, Hunger Artist", "Anxious People", "Bluest Eye "],
        ["The Lido", "Stonewall Reader", "The Monopolists", "Fahrenheit 451", "Breakfast at Tiffany’s"],
        ["Things Fall Apart", "Mythos", "Caste", "The Road", "God Bless You, Mr. Rosewater"],
        ["Nothing To See Here", "Somebody’s Daughter", "The Mixquiahuala Letters", "Deadeye Dick", "Detransition, Baby"],
        ["Kindred", "While Mortals Sleep", "White Fragility"]]
    ]
    const authors = [
        [["John Steinbeck", "Agatha christie", "Novuyo Tshuma", "Kurt Vonnegut", "José Saramago"],
        ["May-Lee Chai", "Gail Honeyman", "Isaac Asimov", "Jessica Francis Kane"],
        ["Ilana Masad", "Margaret Atwood", "Celeste Ng"]],
        [["Gabriel Garcia Marquez", "Duanwad Pimwana", "Franz Kafka", "Fredrik Backman", "Toni Morrison"],
        ["Libby Page", "Jason Baumann", "Mary Pilon", "Ray Bradbury", "Truman Capote"],
        ["Chinua Achebe", "Stephen Fry", "Isabel Wilkerson", "Comarc McCarthy", "Kurt Vonnegut"],
        ["Kevin Wilson", "Ashley C. Ford", "Ana Castillo", "Kurt Vonnegut", "Torrey Peters"],
        ["Octavia Butler", "Kurt Vonnegut", "Robin DiAngelo"]]
    ]
    const imgs = [
        [['steinbeck', 'christie', 'tshuma', 'vonnegut', 'saramago'],
        ['chai', 'honeyman', 'asimov', 'kane'],
        ['masad', 'atwood', 'ng']],
        [['marquez', 'pimwana', 'kafka', 'backman', 'morrison'],
        ['page', 'baumann', 'pilon', 'bradbury', 'capote'],
        ['achebe', 'fry', 'wilkerson', 'mccarthy', 'vonnegut'],
        ['wilson', 'ford', 'castillo', 'vonnegut', 'peters'],
        ['butler', 'vonnegut', 'diangelo']]
    ]
    const booklistYearly = books[year - 2020][listIdx].map((title) => {
        return (
            <div>
                <h1 className="cursor-hover titles" style={{ fontFamily: 'Grand_Aventure', fontSize: "2vh" }} onMouseOver={() => { showAuthor(title) }}>{title}</h1>
            </div>
        )
    })
    const mapArea = [
        {
            "width": "46.17391304347826%",
            "height": "59.16981132075472%",
            "left": "78.821256038647356%",
            "top": "15.756168359941945%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    <h1 style={{ fontSize: '1.5vh', fontFamily: 'Helvetica', color: '#bf8959' }}>page {(listIdx % books[year - 2020].length) + 1}</h1>
                )
            }
        },
        {
            "width": "45.17391304347826%",
            "height": "59.16981132075472%",
            "left": "51.821256038647356%",
            "top": "24.756168359941945%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    <div>
                        {booklistYearly}
                    </div>
                )
            }
        },
        {
            "width": "43.17391304347826%",
            "height": "59.16981132075472%",
            "left": "5.821256038647356%",
            "top": "16.756168359941945%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    authorVisible && <h1 style={{ fontFamily: 'Grand_Aventure', color: '#bf8959', fontSize: "1.8vh" }}>{author}</h1>
                )
            }
        },
        {
            "width": "30%",
            "height": "40%",
            "left": "10.821256038647356%",
            "top": "40.756168359941945%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    authorVisible && <img style={{ borderRadius: '3vh', objectFit: 'cover', width: '100%', height: '100%' }} src={`./authors/${authorImg}.jpeg`} />
                )
            }
        },
        {
            "width": "43.17391304347826%",
            "height": "59.16981132075472%",
            "left": "5.821256038647356%",
            "top": "83.756168359941945%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    authorVisible && <h1 style={{ fontFamily: 'Grand_Aventure', color: '#bf8959', fontSize: "1.8vh" }}>{title}</h1>
                )
            }
        },
        {
            "width": "5%",
            "height": "5%",
            "left": "90%",
            "top": "70%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <div style={{ backgroundColor: 'transparent' }}>
                        <h1 style={{ fontFamily: 'Bohemian', fontSize: '6vh', color: '#bf8959',  backgroundColor: 'transparent' }}
                            onClick={() => setListIdx((listIdx + 1) % books[year - 2020].length)}> {'>'} </h1>
                    </div>
                )
            }
        },
    ]
    const showAuthor = (title) => {
        setTitle(title)
        setAuthorVisible(true)
        setAuthor(authors[year - 2020][listIdx][books[year - 2020][listIdx].indexOf(title)])
        setAuthorImg(imgs[year - 2020][listIdx][books[year - 2020][listIdx].indexOf(title)])
        console.log(imgs[year - 2020][listIdx][books[year - 2020][listIdx].indexOf(title)])
    }
    return (
        <div style={{ position: 'absolute', top: '47vh', right: '4vw' }}>
            <ImageMap
                style={{ margin: "-10px", width: '40vh', height: '20vw' }}
                className="usage-map cursor"
                src={Notebook}
                map={mapArea}
                onMapClick={(area, index) => {
                    console.log(index)
                }}>
            </ImageMap>
            <div className="cursor-hover close-text" style={{ position: 'absolute', border: '1px solid #455a25', backgroundColor: '#c5dca1', top: '0', right: '0', width: '4vh', height: '4vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} onClick={clickingX}>
                <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#455a25', fontSize: '1.5vh', }} onClick={clickingX}>
                    &nbsp;X&nbsp;
                </h1>
            </div>
        </div>
    )
}
export default Booklist;