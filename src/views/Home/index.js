import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeFilms from './HomeFilms';
import HomeCinemas from './HomeCinemas';
import HomeCenter from './HomeCenter';
import Tabbar from '@/components/Tabbar';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTabs: [
        { key: 'films', href: "/films", icon: "icon-dianying", name: '电影' },
        { key: 'cinemas', href: "/cinemas", icon: "icon-yingyuan", name: '影院' },
        { key: 'center', href: "/center", icon: "icon-wode", name: '我的' }
      ]
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/cinemas" component={HomeCinemas}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>
      <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>
    )
  }
}
