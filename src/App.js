import React from 'react';
import './App.css'; 
import Social from './social';
import Meio from './meio';

function App() {
  return (
    <div className="background">
      <div className="topbox">
        <div className="perfil">
          <img src={process.env.PUBLIC_URL + '/Perfil.jpg'} width={90} height={90} className={"perfil"}/>
        </div>
        <div className="caio">
          <div className="caio-text">
            <p>
              <strong>
                PORTIFÓLIO
              </strong>
            </p>
            <p>CAIO VINÍCIUS AGUIAR ALVES, 21</p>
            <p>Game Developer</p>
            <p>Belém, Brazil</p>
          </div>
        </div>
      </div>
      <div className="middlebox">
        <div className="middlebar">
          <p>.</p>
        </div >
        <div className="middle">
          <Meio/>
        </div>
        <div className="aboutMe">
          <div className="aboutMe-info">
            <div className="aboutMe-icon">
              <img src={process.env.PUBLIC_URL + '/diary.png'} width={180} height={180} className={"aboutMe-icon"}/>
              <div className="aboutMe-text">
                <p>About Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottombox">
        <div className="bottom-icons">
          <Social/>
        </div>
      </div>
    </div>
  );
}

export default App;
