import {quizData} from './../data.js';

export  default function quizReducer(state = quizData,action){

  switch(action.type){
    case 'ADD_QUIZ' : return [...state, action.payload];
    break;
    default :  return state
  }

}