import React from 'react';
import './meio.css';
import ReadMoreReact from 'read-more-react';

export default () => {
    const meioData = [
        {
            img: 'Space.png',
            width: 280,
            height: 220,
            title: "Lofi HipHop Brazil",
            description: "Só as de maior qualidade",  
            link: "https://www.youtube.com/watch?v=P1bZ68U7SsY"
        },
        {
            img: 'ubuntu_wallpaper.jpg',
            width: 280,
            height: 220,
            title: "Jogo 2",
            description: "O jogo 2 é o mais pica.",
            link: "https://www.youtube.com/watch?v=jOFco1xuIeo"
        },
        {
            img: 'Roadhog.jpg',
            width: 280,
            height: 220,
            title: "For LoL",
            description: "Alguém me ajuda",
            link: "https://u.gg/"
        }
    ]

    return (
        <>
            {meioData.map(meio => {
                return (
                    <div className="back-hover">
                        <a href={meio.link} style={{textDecoration: 'none'}}>
                            <div className="jogo-back" onClick={() => {}}>
                                <div className="jogo">
                                    <img src={process.env.PUBLIC_URL + meio.img} height={meio.height} width={meio.width} className={"jogo"}/>
                                </div>
                                <div className="jogo-title">
                                    <p>{meio.title}</p>
                                </div>
                                <div className="jogo-description"> 
                                    <ReadMoreReact text={meio.description} onClick max={400} readMoreText={false}/>
                                        <p>...</p>
                                </div>
                                <div className="jogo-arrow">
                                    <img src={process.env.PUBLIC_URL + '/svg/next.svg'} height={30} width={30}/>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </>
    ) 
}