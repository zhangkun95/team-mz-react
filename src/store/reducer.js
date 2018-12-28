//这是一个用来操作store里面的state(数据)的纯函数

import { SETCITY } from './actionsType';

//1.先定义初始数据
let defaultState = {
  curCity: '深圳',
  films: [],
  userInfo: {}
}

//2.暴露纯函数
/**
 *
 * @param {Object} prevState 这次动作之前的数据（state）
 * @param {Object} action 这次的动作描述对象
 */
export default function (prevState = defaultState, action) {
  //做了一系列的事情之后，最后要返回state
  console.log('reducer',prevState, action);

  //拿到当前的prevState,根据action的不同操作 prevState 最后返回一个新的state
  // let state = prevState;
  let state = JSON.parse(JSON.stringify(prevState));
  if (action.type === SETCITY) {
    //给当前城市重新赋值
    state.curCity = action.data;
  }
  return state;
}