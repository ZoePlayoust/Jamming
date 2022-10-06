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
  ]
}
}
    render(){
  return (
<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">

     < SearchBar />

      <div className="App-playlist">
       <SearchResults searchResults={this.state.searchResults} />

       <Playlist />
      </div>
    </div>
  </div>)
}
}