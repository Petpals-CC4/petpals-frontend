import React, { Component } from 'react'
import { DatePicker, Button, Row, Col, Input } from 'antd'
import moment from 'moment'

export class SearchInput extends Component {
  state = {
    searchText: "",
    startValue: null,
    endValue: null,
    endOpen: false,
  }

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf() && startValue < moment().subtract(1, 'days')
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
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
    this.setState({
      searchText: e.target.value
    })
  }

  handleClickGuideText = (index) => () => {
    this.setState({
      searchText: this.props.guideText[index]
    })
    this.props.onSearch(this.props.guideText[index])
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <Row gutter={[8, 8]} style={{ marginBottom: "8px" }}>
          <Col xs={12}>
            <DatePicker
              disabledDate={this.disabledStartDate}
              format="YYYY-MM-DD"
              value={startValue}
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
              value={endValue}
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
              onSearch={this.props.onSearch}
              style={{ width: "100%" }}
              placeholder="ค้นหาบริการ"
              value={this.state.searchText}
              enterButton
              allowClear
            />
          </Col>
        </Row>
        <Row type="flex" gutter={[8, 8]} style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          {this.props.guideText.map((text, index) => {
            return (
              <Col key={index}>
                <Button type="primary" shape="round" onClick={this.handleClickGuideText(index)}>
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
