import React from 'react'; 
import '../Playlist/Playlist.css';
import { Tracklist } from '../Tracklist/Tracklist';


export class Playlist extends React.Component{
render (){
return(
<div className="Playlist">
  <input value="New Playlist"/>
    <Tracklist onAdd={this.props.onAdd} tracks={this.props.playlistTracks}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
)
    }
}
