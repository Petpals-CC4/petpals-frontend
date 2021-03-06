import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from './search-zone/SearchInput'
import SearchResult from './search-zone/SearchResult'
import { Row, Col } from 'antd'

import Axios from '../../utils/api.service'
import {actions as paymentAction} from '../../redux/reducers/payment'

class SearchZone extends Component {
  state = {
    storeResultListOriginal: [
      // {
      //   id: 1,
      //   store_name: "ร้านนี้ดีอยู่แล้่วรวย",
      //   store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
      //   profile_image_url: "",
      //   feedback_score: "4.5",
      //   services: [],
      //   price: "1000"
      // },
      // {
      //   id: 2,
      //   store_name: "ร้านนี้ดีอยู่แล้่วรวย2",
      //   store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
      //   profile_image_url: "",
      //   feedback_score: "4",
      //   services: [],
      //   price: "1800"
      // },
    ],
    storeResultList: [
      // {
      //   id: 1,
      //   store_name: "ร้านนี้ดีอยู่แล้่วรวย",
      //   store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
      //   profile_image_url: "",
      //   feedback_score: "4.5",
      //   services: [],
      //   price: "1000"
      // },
      // {
      //   id: 2,
      //   store_name: "ร้านนี้ดีอยู่แล้่วรวย2",
      //   store_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laudantium hic at tempore eum quam, corrupti tempora asperiores enim, officiis ad odit voluptatem molestias non, assumenda doloribus consectetur nesciunt!",
      //   profile_image_url: "",
      //   feedback_score: "4",
      //   services: [],
      //   price: "1800"
      // },
    ],
    guideText: ["ตัดขน", "ตัดเล็บ", "อาบน้ำ", "ออกกำลังกาย", "ลูบหัว", "เดินเล่น"],
    searchObj: {
      searchText: "",
      startDate: null,
      endDate: null,
    },
    showSelectedRange: false
  }

  handleSearch = (searchObj) => {
    this.setState({ showSelectedRange: true, searchObj })
    this.findService(searchObj.searchText)
    this.props.setReservingDate({
      startDate: searchObj.startDate,
      endDate: searchObj.endDate
    })
  }

  handleClearSearch = () => {
    this.setState(state => ({
      searchObj: {
        searchText: "",
        startDate: null,
        endDate: null,
      },
      storeResultList: state.storeResultListOriginal.slice()
    }))
    this.props.setReservingDate() // Clear Selected Data
  }

  findService = async (searchText) => {
    let result = await Axios.post("/service/search", {
      searchText
    })
    // console.log(result.data);
    this.setState({
      storeResultList: result ? result.data : []
    })
  }

  getRandomStore = async () => {
    let result = await Axios.get("/landingpage")
    console.log(result.data);
    this.setState({
      storeResultList: result ? result.data : [],
      storeResultListOriginal: result ? result.data : []
    })
  }

  getGuideText = async () => {
    let result = await Axios.get("/guide_text")
    console.log(result.data);
    this.setState({
      guideText: result ? result.data : []
    })
  }

  componentDidMount = () => {
    this.getRandomStore()
    this.getGuideText()
    this.props.setReservingDate() // Clear Selected Date
  }

  render() {
    return (
      <div style={{ margin: "2em" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
            <SearchInput
              onSearch={this.handleSearch}
              guideText={this.state.guideText}
              searchObj={this.state.searchObj}
            />
          </Col>
          <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
            <SearchResult
              storeResultList={this.state.storeResultList}
              showSelectedRange={this.state.showSelectedRange}
              selectedSearch={this.state.searchObj}
              onClearSearch={this.handleClearSearch}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  ...paymentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchZone)
