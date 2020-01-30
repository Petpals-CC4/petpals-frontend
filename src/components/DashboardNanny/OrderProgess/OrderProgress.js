import React, { Component } from 'react'
import { Steps, Icon, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
    {
     title: 'รอการชำระเงิน'
    },
    {
     title: 'รอร้านค้ายืนยัน'
    },
    {
     title: 'ออเดอร์สำเร็จ'
    }
]

const stepStyle = {
    boxShadow: '0px -1px 0 0 #e8e8e8 inset'
  };
export class OrderProgress extends Component {
    state = {
        current: 1, 
      };
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }

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
                    style={stepStyle}
                >
            {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
            </Steps>
             <Button 
                type= 'primary'
                style={{ margin: '1.3em'}}
                onClick={() => this.next()}
                >
                 ได้รับการชำระเงินเเล้ว
             </Button>
                {current === steps.length - 1 && (
             <Button type="primary" onClick={() => message.success('Processing complete!')}>
                ยืนยันทำรายการสำเร็จ
             </Button>
            )}
        </div>
        )
    }
}

export default OrderProgress
