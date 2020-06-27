import React from 'react';
import './meio.css'

export default () => {
    const meioData = [
        {
            img: 'Space.png',
            width: 280,
            height: 220,
            title: "Jogo 1",
            description: "O jogo 1 é o mais pica."
        },
        {
            img: 'ubuntu_wallpaper.jpg',
            width: 280,
            height: 220,
            title: "Jogo 2",
            description: "O jogo 2 é o mais pica."
        },
        {
            img: 'Roadhog.jpg',
            width: 280,
            height: 220,
            title: "Jogo 3",
            description: "O jogo 3 é o mais pica."
        }
    ]

    return (
        <>
            {meioData.map(meio => {
                return (
                    <div className="back-hover">
                        <div className="jogo-back">
                            <div className="jogo">
                                <img src={process.env.PUBLIC_URL + meio.img} height={meio.height} width={meio.width} className={"jogo"}/>
                            </div>
                            <div className="jogo-title">
                                <p>{meio.title}</p>
                            </div>
                            <div className="jogo-description"> 
                                <p>{meio.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    ) 
}