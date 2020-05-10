import React from 'react';
import './App.css';
import './style.css';
import imageInSrc from './assets/imageInSrc.jpg';
import myVideo from './assets/myVideo.mp4';

function App() {
  return (
    <div className="App">
          <div style={{border:'solid 1px black',maxWidth:'100vw'}}>  
 
            <h1 className="title red">Riadh Ftouhi</h1>  

            <br/>  

            <img src={imageInSrc}/> <br/> 

            <img src="/res/imageInPublic.jpg"/>  

          </div>  

          <video width="320" height="240" controls>  

            <source src={myVideo} type='video/mp4'/> 

          </video> 
    </div>
  );
}

export default App;
