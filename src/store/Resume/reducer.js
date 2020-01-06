
import actionTypes from "./actionType"
const initState = {
  moduleName:"resume",
  infoPool:[

  ],
  workplaces:[
    {
      resume:{},
    }
  ]
}
export default function Resume(oldState,action){
  switch (action.type) {
    case actionTypes.addInfo:
      return {
        ...oldState,
        infoPool: [...oldState.infoPool, action.info]
      }
    default:
      return initState
      break;
  }
}