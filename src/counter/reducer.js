
let initalState = {
  count: 0,
  name: 'Ani'
}

function rootReducer(state = initalState, action) { // action->{type:'ADD'}
  switch (action.type) {
    case 'ADD': return { count: state.count + 1 };
    case 'SUP': return { count: state.count - action.payload };
    default: return state
  }


}

export default rootReducer