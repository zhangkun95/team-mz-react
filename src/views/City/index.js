import React, { Component } from 'react';
import store from '@/store';
import { SETCITY } from '@/store/actionsType';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 这个地方只是默认从仓库中拿取数据。而仓库发生了变化，这行代码不会重复的执行
      myCity: store.getState().curCity
    }
    console.log(this.state);

    //监听 仓库的变化
    store.subscribe(() => {
      this.setState({
        myCity: store.getState().curCity
      })
    })
  }
  changgeCity(ciytName) {
    store.dispatch({
      type: SETCITY,
      data: ciytName
    })
  }

  render() {
    return (
      <div>
        城市搜索 - {this.state.myCity}
        <button onClick={this.changgeCity.bind(this, '四川')}>四川</button>
      </div>
    )
  }
}
