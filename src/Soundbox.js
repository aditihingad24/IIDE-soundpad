import React from 'react';

function Soundbox(props) {


        
        const onclick = function onClick() {
            var audio = new Audio(props.track)
            audio.play()
        }


        return(
                <button className="button" onClick={onclick}>
                    {props.text}
                   
                </button>                  
              )
    }
export default Soundbox