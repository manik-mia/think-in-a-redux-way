// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// creator

const increment = (actionValue) => {
    return {
        type: INCREMENT,
        payload: {
            value: actionValue,
        },
    };
};
const decrement = (actionValue) => {
    return {
        type: DECREMENT,
        payload: {
            value: actionValue,
        },
    };
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload.value,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload.value,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(3));
});
