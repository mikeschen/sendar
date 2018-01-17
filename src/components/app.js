import React, { Component } from 'react';

import Header from '../containers/header';
import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}
