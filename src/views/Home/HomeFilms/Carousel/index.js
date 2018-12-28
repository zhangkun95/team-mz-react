import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import img1 from './imagse/1.png';
import img2 from './imagse/2.jpg';
import img3 from './imagse/3.jpg';
import img4 from './imagse/4.jpg';
import img5 from './imagse/5.png';
import img6 from './imagse/6.jpg';

export default class Carouse extends Component {
  state = {
    data: ['1', '2', '3', '4','5','6'],
    imgHeight: 176,
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     CarouselImg: [img1, img2, img3, img4, img5,img6]
  //   }
  // }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [img1, img2, img3, img4, img5,img6],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
        {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
          {/* {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))} */}
        </Carousel>
      </WingBlank>
    )
  }
}
