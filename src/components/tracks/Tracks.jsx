import React, { Component } from 'react';
import {Consumer} from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

export class Tracks extends Component {
   render() {
      return (
         <Consumer>
            {value => {
               if (value.track_list === undefined || value.track_list.length === 0 ){
                  return <Spinner />
               } else {
                  return (
                     <React.Fragment>
                        <h3 className="text-center mb-4" > {value.heading} </h3>
                        <div className="row" >
                           {value.track_list.map (item => <Track key={item.track.track_id} track={item.track} />)}
                        </div>
                     </React.Fragment>
                  )
               }
            }}
         </Consumer>
      )
   }
}

export default Tracks
