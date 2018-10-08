
import React from 'react';
import ReactDOM from "react-dom";
import { observable, action,computed  } from 'mobx';
import { observer } from 'mobx-react';
//例子1
//class MyState {
//@observable num = 0;
//@action addNum = () => {
//  this.num++;
//};
//}
// 
//const newState = new MyState();
// 
//@observer
//class App extends React.Component {
//render() {
//  return (
//    <div>
//      <p>{newState.num}</p>
//      <button onClick={newState.addNum}>+1</button>
//    </div>
//  )
//}
//}
// ReactDOM.render(<App />, document.getElementById('root'));

//例子2

class MyState {
@observable num1 = 100;
@observable num2 = 100;
   
@action addNum1 = () => {
    this.num1 ++;
};
@action addNum2 = () => {
    this.num2 ++;
};
@computed get total() {
    return this.num1 + this.num2;
}
}
   
const newState = new MyState();
   
const AllNum = observer((props) => <div>num1 + num2 = {props.store.total}</div>);
   
const Main = observer((props) => (
<div>
    <p>num1 = {props.store.num1}</p>
    <p>num2 = {props.store.num2}</p>
    <div>
      <button onClick={props.store.addNum1}>num1 + 1</button>
      <button onClick={props.store.addNum2}>num2 + 1</button>
    </div>
</div>
));
   
@observer
class App extends React.Component {
render() {
    return (
      <div>
        <Main store={newState} />
        <AllNum store={newState} />
      </div>
    );
}
}

ReactDOM.render(<App />, document.getElementById('root'));



//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//
//import { observable, computed, useStrict, action,autorun} from 'mobx';
//import { observer } from 'mobx-react';
//
// 
//class VM {
//	@observable firstName = '';
//	@observable lastName = '';
//	  
//	@computed get fullName() {
//	    const { firstName, lastName } = this;
//	    if (!firstName && !lastName) {
//	      return 'Please input your name!'
//	    } else {
//	      return firstName + ' ' + lastName;
//	    }
//	};
//	   
//	@action.bound
//	setValue(key, event) {
//		this[key] = event.target.value;
//	}
//	@action.bound
//	doReset() {
//	    this.firstName = '';
//	    this.lastName = '';
//	}
//}
//
//@observer
//class App extends Component {
//	render() {
//	    const vm = this.props.vm;
//	    return (
//	      <div>
//	        <h1>This is mobx-react!</h1>
//	        <p>First name: <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} /></p>
//	        <p>Last name: <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} /></p>
//	        <p>Full name: {vm.fullName}</p>
//	        <p><button onClick={vm.doReset}>Reset</button></p>
//	      </div>
//	    );
//	}
//}
//ReactDOM.render(<App vm={new VM()} />, document.getElementById('root'));




//class Store{
//	@observable array = [9];
//	@observable obj = {};
//	
//	@observable str = 'hello';
//	@observable num = 20;
//	@observable bool = false;
//	
//	@computed get hi(){
//		return store.str+"love";
//	}
//	@action bar(n){
//		this.num=n;
//	}
//}
//
//var store = new Store();
//
////autorun(()=>{
////	console.log(store.hi);
////})
//
//
////when(()=>store.bool,()=>console.log("it is true!"));
//
//
//reaction(()=>store.num,(a)=>console.log(a));
//store.bar("a");
//store.bar("b");

