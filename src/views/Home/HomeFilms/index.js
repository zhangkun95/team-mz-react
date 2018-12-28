import React, {Fragment} from 'react';
import Positioning from './Positioning';
import Carousel from './Carousel';

class HomeFilms extends React.Component {
  render() {
    return (
      <Fragment>
        <Carousel></Carousel>
        <Positioning></Positioning>
        <div>电影页面</div>
      </Fragment>
    )
  }
}

export default HomeFilms;
