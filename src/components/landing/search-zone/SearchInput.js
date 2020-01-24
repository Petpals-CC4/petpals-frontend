import React, { Component } from 'react'
import { DatePicker, Button, Row, Col, Input } from 'antd'
import moment from 'moment'

export class SearchInput extends Component {
  state = {
    endOpen: false,
    searchObj: {
      searchText: "",
      startDate: null,
      endDate: null,
    }
  }

  disabledStartDate = startDate => {
    const { searchObj } = this.state;
    const { endDate } = searchObj
    if (!startDate || !endDate) {
      return startDate < moment().subtract(1, 'days');
    }
    return startDate.valueOf() > endDate.valueOf() || startDate < moment().subtract(1, 'days')
  };

  disabledEndDate = endDate => {
    const { searchObj } = this.state;
    const { startDate } = searchObj
    if (!endDate || !startDate) {
      return endDate < moment().subtract(1, 'days');
    }
    return endDate.valueOf() <= startDate.valueOf();
  };

  onChange = (field, value) => {
    this.setState((state) => ({
      searchObj: {
        ...state.searchObj,
        [field]: value
      }
    }))
  };

  onStartChange = value => {
    this.onChange('startDate', value);
  };

  onEndChange = value => {
    this.onChange('endDate', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  handleChangeSearch = (e) => {
    let searchText = e.target.value
    this.setState((state) => ({
      searchObj: {
        ...state.searchObj,
        searchText
      }
    }))
  }

  handleSearch = (e) => {
    this.props.onSearch(this.state.searchObj)
  }

  handleClickGuideText = (index) => () => {
    this.setState((state) => ({
      searchObj: {
        ...state.searchObj,
        searchText: this.props.guideText[index]
      }
    }))
    this.props.onSearch({
      ...this.state.searchObj,
      searchText: this.props.guideText[index],
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      JSON.stringify(this.props.searchObj) !== JSON.stringify(prevProps.searchObj) &&
      JSON.stringify(this.props.searchObj) !== JSON.stringify(prevState.searchObj)
    ) {
      this.setState({
        searchObj: {
          ...this.props.searchObj,
        }
      })
    }
  }

  render() {
    const { searchObj, endOpen } = this.state;
    const { searchText, startDate, endDate } = searchObj
    return (
      <div>
        <Row gutter={[8, 8]} style={{ marginBottom: "8px" }}>
          <Col xs={12}>
            <DatePicker
              disabledDate={this.disabledStartDate}
              format="YYYY-MM-DD"
              value={startDate}
              placeholder="วันเริ่มต้น"
              onChange={this.onStartChange}
              onOpenChange={this.handleStartOpenChange}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12}>
            <DatePicker
              disabledDate={this.disabledEndDate}
              format="YYYY-MM-DD"
              value={endDate}
              placeholder="วันสิ้นสุด"
              open={endOpen}
              onChange={this.onEndChange}
              onOpenChange={this.handleEndOpenChange}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={24}>
            <Input.Search
              onChange={this.handleChangeSearch}
              onSearch={this.handleSearch}
              style={{ width: "100%" }}
              placeholder="ค้นหาบริการ"
              value={searchText}
              enterButton
              allowClear
              disabled={!startDate || !endDate}
            />
          </Col>
        </Row>
        <Row type="flex" gutter={[8, 8]} style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          {this.props.guideText.map((text, index) => {
            return (
              <Col key={index}>
                <Button
                  type="primary"
                  shape="round"
                  onClick={this.handleClickGuideText(index)}
                  disabled={!startDate || !endDate}
                  >
                  {text}
                </Button>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default SearchInput
