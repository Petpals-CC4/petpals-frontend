import React, { Component } from 'react'
import { Steps, Icon } from 'antd';

const { Step } = Steps;

const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

export class OrderProgress extends Component {
    
    state = {
        current: 0,
      };

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
      };

    render() {
     const { current } = this.state;
        return (
            <div>
                <Steps
                    type="navigation"
                    size="small"
                    current={current}
                    onChange={this.onChange}
                    style={stepStyle}
                >
            </Steps>
                <Steps type="navigation" current={current} onChange={this.onChange} style={stepStyle}>
                <Step status="finish" title="รอการชำระเงิน" />
                <Step status="process" title="รอร้านค้ายืนยัน"  />
                <Step status="wait" title="ออเดอร์สำเร็จ" />
                <Step status="wait" title="Step 4" />
            </Steps>
            </div>
        )
    }
}

export default OrderProgress
