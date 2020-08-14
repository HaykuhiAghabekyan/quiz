

export  default function resultReducer(state = false,action){
switch(action.type){
  case "FINISH" : return !state
}
  return state
}