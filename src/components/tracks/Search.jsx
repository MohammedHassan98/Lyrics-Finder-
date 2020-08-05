import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

export class Search extends Component {
   state = {
      trackTitle : ""
   }

   textChange = (e)=> {
      this.setState ({[e.target.name] : e.target.value});
   } 

   findTrack = (dispatch ,e) => {
      e.preventDefault();

      axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
      q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc
      &apikey=${process.env.REACT_APP_ML_KEY}`)

      .then(res => {
         dispatch({
            type : 'SEARCH_TRACKS',
            payload : res.data.message.body.track_list 
         });
         this.setState({trackTitle:""});
      })

      .catch(err => {return <h1>Try Again later ...</h1>} )
   }

   render() {
      return (
         <Consumer>
            {value => {
               const {dispatch} = value;
               return (
                  <div className="card card-body mb-4 p-4">
                     <h1 className="display-4 text-center">
                        <i className="fas fa-music"></i> Seacrh For A Song
                     </h1>
                     <p className="lead text-center">Get The Lyrics For Any Song</p>
                     <form onSubmit ={this.findTrack.bind(this,dispatch)} >
                        <div className="form-group">
                           <input type="text" 
                           className="form-control form-control-lg" 
                           placeholder="Song Title ..." 
                           name = "trackTitle"
                           value ={this.state.trackTitle}
                           onChange ={this.textChange} />
                        </div>
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit" >Get Track Lyrics</button>
                     </form>
                  </div>
               );
            }}
         </Consumer>
      )
   }
}

export default Search
