import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_results: [],
    };
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        search_results: videos
      });
    });
  }

  searchStyle(){
  }

  render() {
    return (
      <div>
        {
          this.state.search_results.length > 0 ?
            <div>
              <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} searchStyle={{ display: 'block', textAlign: 'center', verticalAlign: 'initial', position: 'fixed', left: 0, top: 0, padding: '20px 10px 15px 10px', height: '50px', boxShadow: '0 2px 11px -3px rgba(0,0,0,0.3)'}} />
              <VideoList videos={this.state.search_results} />
            </div> :
            <div style={{display: 'table', width: '100%', height: '100%'}}>
              <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} searchStyle={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'middle'}} />
            </div>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
