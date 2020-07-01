import React from 'react';
import './habilidades.css';

export default () => {
    const habilidadesData = [
        {
            name: "Unity",
            progress: 40, 
        },
        {
            name: "C#",
            progress: 35, 
        },
        {
            name: "ReactJS",
            progress: 60, 
        },
        {
            name: "Scrum",
            progress: 55, 
        },
        {
            name: "Gerência de Projetos",
            progress: 85, 
        },
    ]

    const LanguageData = [
        {
            name: "Português",
            progress: 100,  
        },
        {
            name: "Inglês",
            progress: 90,  
        }
    ]
    
    return (
        <>
            {habilidadesData.map(habilidades => {
                return (
                    <>
                        <div className="habilidade">
                            <div className="habilidade-name">
                                <p>{habilidades.name}</p>
                            </div>
                            <div className="habilidade-bar">
                                <div className="habilidade-perc" style={{width: habilidades.progress + "%"}}>
                                    <p style={{backgroundColor: '#9B5757', height: 20}}>.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

            <div className="linguas">
                <h1>Línguas</h1>
            </div>

            {LanguageData.map(languages => {
                return(
                    <>
                        <div className="language">
                            <div className="language-name">
                                <p>{languages.name}</p>
                            </div>
                            <div className="habilidade-bar">
                                <div className="habilidade-perc" style={{width: languages.progress + "%"}}>
                                    <p style={{backgroundColor: '#9B5757', height: 20}}>.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

