import React, { Component } from 'react'

import SearchInput from './search-zone/SearchInput'
import SearchResult from './search-zone/SearchResult'

class SearchZone extends Component {
  state = {
    storeResultList: [
      {
        id: 1,
        store_name: "ร้านนี้ดีอยู่แล้่วรวย",
        store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
        profile_image_url: "",
        feedback_score: "4.5",
        services: [],
        price: "1000"
      },
      {
        id: 2,
        store_name: "ร้านนี้ดีอยู่แล้่วรวย2",
        store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
        profile_image_url: "",
        feedback_score: "4",
        services: [],
        price: "1800"
      },
    ],
    guideText: ["ตัดขน", "ตัดเล็บ", "อาบน้ำ", "ออกกำลังกาย", "ลูบหัว", "เดินเล่น"],
  }

  handleSearch = (value) => {
    console.log("search:", value)
  }

  render() {
    return (
      <div style={{ margin: "2em" }}>
        <div style={{ marginBottom: "2em" }}>
          <SearchInput onSearch={this.handleSearch} guideText={this.state.guideText} />
        </div>
        <div>
          <SearchResult storeResultList={this.state.storeResultList} />
        </div>
      </div>
    )
  }
}

export default SearchZone
