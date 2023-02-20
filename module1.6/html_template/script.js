// Select Element
let counterEl = document.getElementById("counter");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");

// Initial State
const initialState = {
    value: 0,
};
// Reducer Function
const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        if (state.value <= 0) {
            return state;
        }
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
};
// Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value;
};
render();
// Subscribe To Store
store.subscribe(render);

// Button Click
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    });
});
decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    });
});
