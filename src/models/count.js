export default{
    namespace:'count',
    state:0,
    reducers:{
        add(state)  { return state + 1;},
        minus(state){ return state - 1;},
    },
    effects:{
        *addDelay(action,{call,put}){
            yield call(delay,1000);
            yield put(type:'add');
        }
    },
    subscriptions:{
        keyboard({dispatch}){
            return key('ctrl+up',()=>{dispatch({type:'addDelay'});});
        }
    }

}