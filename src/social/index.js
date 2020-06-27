import React from 'react';
import './social.css'

export default () => {
    const socialData = [
        {
            img: "github-image.svg",
            size: 50,
            link: "https://github.com/caiovini980"
        },
        {
            img: "linkedin.svg",
            size: 40,
            link: "https://www.linkedin.com/in/caio-vin%C3%ADcius-aguiar-alves-00872613b/"
        },
        {
            img: "twitter(1).svg",
            size: 45,
            link: "https://twitter.com/caiovini980"
        },
        {
            img: "instagram.svg",
            size: 40,
            link: "https://www.instagram.com/caiovini980/"
        },
        {
            img: "mail.svg",
            size: 45,
        },

    ]

    return (
        <>
            {socialData.map(social => { 
                return(
                    <a href={social.link}>    
                        <div className={"github-back"} onClick={() => {}}> 
                            <div className={"github"}>
                                <img src={process.env.PUBLIC_URL + '/svg/' + social.img} width={social.size} height={social.size} className={"github"} />
                            </div>
                        </div>
                    </a>    
                )
            })}
        </>
    )
}