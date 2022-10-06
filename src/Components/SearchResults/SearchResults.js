import React from 'react'; 
import '../SearchResults/SearchResults.css'
import {Tracklist} from '../Tracklist/Tracklist'

export class SearchResults extends React.Component{

  

    render (){
        return (<div className="SearchResults">
        <h2>Results</h2>
        <Tracklist isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults} />
      </div>)
    }
}