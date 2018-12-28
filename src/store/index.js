//用来创建仓库的js。最后需要将  仓库给暴露出去

// 1.引入redux 里面的 createStroe 的方法
import { createStore } from 'redux';
import reducers from './reducer';

//2.调用createStroe 方法返回一个仓库的实例对象，第一个参数需要传递 reducer
const store = createStore(reducers);
//3.暴露这个仓库的实例对象
export default store;
