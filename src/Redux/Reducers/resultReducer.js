

export  default function resultReducer(state = [],action){
switch (action.type) {
  case 'ADD_RESULT_TRUE':
    return [ ...state, {[action.payload.id]:action.payload.activeQuestion,answer:true}]; break;

    case 'ADD_RESULT_FALSE':
        return [ ...state, {[action.payload.id]:action.payload.activeQuestion,answer:false}]; break;

  default: return state

}

}

