import React from 'react'; 
import '../Playlist/Playlist.css';
import { Tracklist } from '../Tracklist/Tracklist';


export class Playlist extends React.Component{
constructor(props){
super(props); 

this.handleNameChange= this.handleNameChange.bind(this)
}

handleNameChange(e){

  this.props.onNameChange(e.target.value)

}

render (){
return(
<div className="Playlist">
  <input defaultValue="New Playlist" onChange={this.handleNameChange}/>
    <Tracklist isRemoval={true} onRemove={this.props.onRemove} onAdd={this.props.onAdd} tracks={this.props.playlistTracks}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
)
    }
}
