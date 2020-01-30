import React, { Component } from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

class OrderProgress extends Component {
  render() {
    const current = this.props.current
    const steps = [
      "รอการชำระเงิน",
      "รอการยืนยัน",
      this.props.isCompleted ? "ออเดอร์สำเร็จ" : "ยกเลิกออเดอร์",
    ]
    return (
      <Steps direction="vertical" size="small" current={current}>
        {steps.map(item => (
          <Step key={item} title={item} />
        ))}
      </Steps>
    )
  }
}

OrderProgress.defaultProps = {
  current: 1,
  isCompleted: true
}

export default OrderProgress
