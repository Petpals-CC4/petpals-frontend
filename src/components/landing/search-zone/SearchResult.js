import React, { Component } from 'react'
import { Button } from 'antd'
import SearchStoreCard from './SearchStoreCard'
import { withRouter } from 'react-router-dom'

export class SearchResult extends Component {
  handleClickStore = (id) => (e) => {
    this.props.history.push(`/store_detail/${id}`)
  }
  render() {
    const {
      storeResultList,
      showSelectedRange,
      selectedSearch,
      onClearSearch
    } = this.props
    return (
      <div>
        {(showSelectedRange && selectedSearch && selectedSearch.startDate && selectedSearch.endDate) ?
          <>
            <h3 style={{marginTop: "1em"}}>ผลลัพธ์การค้นหา</h3>
            <Button.Group shape="round" style={{ width: "100%" }}>
              <Button type="primary" icon="calendar">
                {`${selectedSearch.startDate.format("YYYY-MM-DD")} ~ ${selectedSearch.endDate.format("YYYY-MM-DD")}`}
              </Button>
              <Button type="ghost" icon="close" onClick={onClearSearch} />
            </Button.Group>
          </>
          : <h3 style={{marginTop: "1em"}}>ร้านค้าแนะนำ</h3>
        }
        {storeResultList.map((store) => (
          <SearchStoreCard
            key={store.id}
            name={store.store_name}
            description={store.store_description}
            score={store.feedback_score}
            imgUrl={store.profile_image_url}
            services={store.services}
            onClick={this.handleClickStore(store.id)}
          />
        ))}
      </div>
    )
  }
}

export default withRouter(SearchResult)
