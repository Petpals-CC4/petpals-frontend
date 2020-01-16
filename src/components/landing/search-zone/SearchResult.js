import React, { Component } from 'react'
import { Button } from 'antd'
import SearchStoreCard from './SearchStoreCard'

export class SearchResult extends Component {
  state = {
    startDate: "2020-01-01",
    endDate: "2020-01-20",
    isHideFilter: false,
  }

  render() {
    const { isHideFilter, startDate, endDate } = this.state
    const { storeResultList } = this.props
    return (
      <div>
        <span>ผลลัพธ์การค้นหา</span>
        {!isHideFilter ?
          <Button.Group shape="round" style={{ width: "100%" }}>
            <Button type="primary" icon="calendar">
              {`${startDate} ~ ${endDate}`}
            </Button>
            <Button type="ghost" icon="close" />
          </Button.Group>
          : ""
        }
        {storeResultList.map((store) => (
          <SearchStoreCard
            key={store.id}
            name={store.store_name}
            description={store.store_description}
            score={store.feedback_score}
            imgUrl={store.profile_image_url}
            services={store.services}
            price={store.price}
            onClick={(e) => { console.log(e) }}
          />
        ))}
      </div>
    )
  }
}

export default SearchResult
