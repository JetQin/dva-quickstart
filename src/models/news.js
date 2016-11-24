export default{

    namespace:"news",

    state:[],

    //synchronous operations that modify state.Triggered by actions. Signature of (state, action) => state, same as Redux.
    reducers:{

    },

    // asynchronous operations that don't modify state directly. Triggered by actions, can call actions. Signature of (action, { put, call, select }),
    effects:{

    },

    // asynchronous read-only operations that don't modify state directly. Can call actions. Signature of ({ dispatch, history }).
    subscriptions:{
        
    }

}