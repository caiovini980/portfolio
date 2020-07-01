import React from 'react';
import './about.css';
import Habilidades from '../habilidades';

export default () => {
    return (
        <>
            <div className="about-fundo">
                <div className="about-topbox">
                    <div className="about-icon">
                        <img src={process.env.PUBLIC_URL + '/diary.png'} width={200} height={200}/>
                    </div>
                    <div className="about-title">
                        <p>About Me</p>
                    </div>
                </div>
                <div className="about-body">
                    <div className="left">
                            <img src={process.env.PUBLIC_URL + '/Perfil2.jpg'} width={250} height={250} className="perfil2"/>
                    </div>
                    <div className="right">
                        <h1 className="habilidades-title">Habilidades</h1>
                        <div className="habilidades">
                            <Habilidades />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )  
}