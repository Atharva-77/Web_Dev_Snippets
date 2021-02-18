const redux=require('redux')
const createStore=redux.createStore 
const combineReducers= redux.combineReducers

const BUY_CAKE="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"

//action creator not only obj. If you want to rename, prop in obj then in  
function buyCake()
{
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream()
{
    return {
        type: BUY_ICECREAM,
        info: '2nd redux action'
    }
}


// const initilState=
// {
//     numberOfCake:10,
//     numberOfIceCream:20

// }
const initialCakeState=
{
    numberOfCake:10
}
const initialIceCreamState=
{
    numberOfIceCream:20

}

// const reducer = (state=initilState, action) =>
// {
//     switch(action.type) {
//         case BUY_CAKE: return {
//                      ...state  ,
//                     numberOfCake: state.numberOfCake -1
                    
//                  } 

//         case BUY_ICECREAM: return {
//                     ...state  ,
//                    numberOfIceCream: state.numberOfIceCream -1
                   
//                 }         
//         default:
//             return state
//     }
 
// }

const cakeReducer = (state=initialCakeState, action) =>
{
    switch(action.type) {
        case BUY_CAKE: return {
                     ...state  ,
                    numberOfCake: state.numberOfCake -1
                    
                 }        
        default:
            return state
    }
 
}

const iceCreamReducer = (state=initialIceCreamState, action) =>
{
    switch(action.type) {
        case BUY_ICECREAM: return {
                     ...state  ,
                    numberOfIceCream: state.numberOfIceCream -1
                    
                 }        
        default:
            return state
    }
 
}
//combining reducers
//object is passed
const rootReducers=combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducers)
//Reducer func is passed.
// 1. Holds appln state

console.log("Initial State",store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated state",store.getState() ))

store.dispatch(buyCake())
store.dispatch(buyCake())
// console.log(store.getState().cake.numberOfCake)

store.dispatch(buyCake())


store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()