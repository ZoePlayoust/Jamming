import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import '../App/App.css'




export class App extends React.Component{
constructor (props){
  super(props); 
  this.state = {
    searchResults: [
    {name: 'This is your song', artist: 'Elton John', album: 'Elton', id: '1'}, 
    {name: 'song 2', artist: 'artiste 2', album: 'album 2', id: 'id 2'},
    {name: 'song 3', artist: 'artist 3', album: 'album 3', id: 'id 3'}
  ], 
    playlistName: 'playlist 1', 
    playlistTracks: [ 
    {name: 'Playlist song 1', artist: 'artiste 1', album: 'album 1', id: 'a'}, 
    {name: 'Playlist song 2', artist: 'artiste 2', album: 'album 2', id: 'ab'},
    {name: 'Playlist song 3', artist: 'artiste 3', album: 'album 3', id: 'abc'}
    ]
  
}
this.addTrack= this.addTrack.bind(this)
}

addTrack (track){
let tracks = this.state.playlistTracks; 
if (track.id === tracks.find(savedTrack => savedTrack.id)){
   return; 
}

tracks.push(track);
this.setState({ playlistTracks: tracks })
}
    render(){
  return (
<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">

     < SearchBar />

      <div className="App-playlist">
       <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>

       <Playlist playlist={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>)
}
}