const {createStore} =require('redux')


const increment={
    type:'INCREMENT',
}
const decrement={
    type:'DECREMENT',
}

const counter=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return state
    }

}

const store=createStore(counter)

store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(decrement)
// store.dispatch("")
console.log(store.getState())