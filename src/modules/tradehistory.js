const initialState = {
  test: { objectItem: "this is an object item" },
  test2: "this is another test"
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
