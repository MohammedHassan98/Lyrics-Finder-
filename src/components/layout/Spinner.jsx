import React from 'react';
import SpinnerGIF from './Spinner-1s-200px.gif';

export default function Spinner() {
   return (
      <div style={{display:'flex' , justifyContent:'center',alignItems:'center'}} >
         <img src={SpinnerGIF}
         alt="Loading..."
         style={{ width:'100px' , margin:'10px', display:'block'}}
         />
      </div>
   )
}
