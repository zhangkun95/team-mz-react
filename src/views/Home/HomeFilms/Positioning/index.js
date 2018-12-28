import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import xiabiao from './xiabiao.png';

import store from '@/store';

class Positioning extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
  render() {
    return (
      <Fragment>
            {/* <!-- 定位城市 --> */}
            <div id="header" >
                <div className="header">
                    <div className="address about">
                        <div>
                            <Link to="/city">{ this.state.curCity }</Link>
                            <img src={xiabiao} alt="" />
                        </div>
                    </div>
                    <div className="film">
                        <div>电影</div>
                    </div>
                    <div className="about"></div>
                </div>
            </div>
           {/* <!-- 定位城市 --></div> */}
      </Fragment>
    )
  }
}
export default Positioning;