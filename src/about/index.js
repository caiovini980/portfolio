import React from 'react';
import './about.css';

export default () => {
    return (
        <>
            <div className="about-fundo">
                <div className="about-icon">
                    <img src={process.env.PUBLIC_URL + '/diary.png'} width={200} height={200}/>
                </div>
                <div className="about-title">
                    <p>About Me</p>
                </div>
            </div>
        </>
    )  
}