import React, { Component } from 'react'

import SearchInput from './search-zone/SearchInput'
import SearchResult from './search-zone/SearchResult'

class SearchZone extends Component {
  render() {
    return (
      <div style={{ margin: "2em" }}>
        <div style={{ marginBottom: "2em" }}>
          <SearchInput />
        </div>
        <div>
          <SearchResult />
        </div>
      </div>
    )
  }
}

export default SearchZone
