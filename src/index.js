function redux(initialState) {
  let store = {
    value: initialState,
    getValue() {
      return this.value;
    }
  };
  let reducer;

  const createReducer = r => {
    reducer = r;
  };
  const updateStore = data => {
    store.value = data;
  };
  const dispatch = action => {
    updateStore(reducer(store, action));
  };
  return { dispatch, createReducer, store };
}

const { store, dispatch, createReducer } = redux(1);

createReducer(({ value }, action) => {
  if (action.type === "ADD") {
    return value + action.payload;
  }
  return value;
});

dispatch({
  type: "ADD",
  payload: 1
});

console.log(store.value);

dispatch({
  type: "ADD",
  payload: 2
});

console.log(store.value);
