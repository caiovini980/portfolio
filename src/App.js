import React, {useState} from 'react';
import './App.css'; 
import Social from './social';
import Meio from './meio';
import About from './about';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function App() {
  
  const [visible, setVisible] = useState(true);

  function show() {
    setVisible(true)
  }

  function hide() {
    setVisible(false)
  }

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
          <a href={show} onClick={show} style={{textDecoration: 'none'}}>
            <div className="aboutMe-top">
              <div className="aboutMe-icon">
                <img src={process.env.PUBLIC_URL + '/diary.png'} width={180} height={180} className={"aboutMe-icon"}/>
              </div>
            </div>
            <div className="aboutMe-middle">
              <div className="aboutMe-text">
                <p>About Me</p>
              </div>
            </div>
            <div className="aboutMe-bottom">
              <div className="aboutMe-arrow">
                <img src={process.env.PUBLIC_URL + '/svg/next.svg'} height={30} width={30}/>
              </div>
            </div>
          </a>
            <Rodal visible={visible} onClose={hide} height={655} width={1300} animation={'door'} showCloseButton={false}>
              <About></About>
            </Rodal>
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
