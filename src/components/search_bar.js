import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { term: '', borderStyle: {} };
  }

  onInputFocus(){
    this.setState({borderStyle: {borderBottom: '3px solid #0fdce6'}})
  }

  onInputBlur(){
      this.setState({borderStyle: {borderBottom: 'none'}})
  }

  render() {
    console.log(this.props);
    return (
      <div className="search-bar" style={this.props.searchStyle}>
        <input
          style={this.state.borderStyle}
          value={this.state.term}
          onFocus={() => this.onInputFocus()}
          onBlur={() => this.onInputBlur()}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
