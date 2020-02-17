import React from 'react';
import './App.css';
import Soundbox from './Soundbox';
import track1 from './tracks/1.wav';
import track2 from './tracks/2.wav';
import track3 from './tracks/3.wav';
import track4 from './tracks/4.wav';
import track5 from './tracks/5.wav';
import track6 from './tracks/6.wav';
import track7 from './tracks/7.mp3';
import track8 from './tracks/8.wav';
import track9 from './tracks/9.wav';
import track10 from './tracks/10.wav';
import track11 from './tracks/11.mp3';
import track12 from './tracks/12.wav';
import track13 from './tracks/13.wav';
import track14 from './tracks/14.wav';
import track15 from './tracks/15.mp3';
import track16 from './tracks/16.wav';

const tracks = [
  track1,
  track2,
  track3,
  track4,
  track5,
  track6,
  track7,
  track8,
  track9,
  track10,
  track11,
  track12,
  track13,
  track14,
  track15,
  track16,
]

function App() {
  return (
    <div >
    <header className="heading"><b>SOUND PAD</b></header>
    <div className="outerBox">
    <div className="Box">
     {
       tracks.map(function (track) {
         return <Soundbox track={track} />
         
       })
     }
        
      
    </div>
    </div>
    </div>
  );
}

export default App;
