const redux=require('redux')
const createStore=redux.createStore 

const BUY_CAKE="BUY_CAKE"

//action creator not only obj. If you want to rename, prop in obj then in  
function buyCake()
{
    return {
        type: BUY_CAKE,
        info: 'first resux action'
    }
}



const initilState=
{
    numberOfCake:10
}

const reducer = (state=initilState, action) =>
{
    switch(action.type) { // bracket should be here, not down
        case BUY_CAKE: return { // bracket should be here, not down
                     ...state  ,
                    numberOfCake: state.numberOfCake -1
                    
                 } 
        default:
            return state
    }
 
}
const store = createStore(reducer)
//Reducer func is passed.
// 1. Holds appln state

console.log("Initial State",store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated state",store.getState() ))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
