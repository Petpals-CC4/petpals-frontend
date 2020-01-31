import React, { Component } from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

class OrderProgress extends Component {
  render() {
    const {
      current
    } = this.props
    const steps = [
      "รอการชำระเงิน",
      "รอการยืนยัน",
      current === 3 ? "ยกเลิกออเดอร์" : "ออเดอร์สำเร็จ",
    ]
    const currentBoundary = current > 2 ? 2 : current
    return (
      <Steps
        size="small"
        direction="vertical"
        current={currentBoundary}
        // 0 1 process
        // 2 finish
        // 3 error
        status={current > 2 ? "error" : (current === steps.length - 1 ? "finish" : "process")}>
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
