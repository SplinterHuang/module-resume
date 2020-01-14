
import actionTypes from "./actionType"
const initState = {
  moduleName:"resume",
  infoPool:[
    
  ],
  resumes:[],
  workplaceResume:{
    infos:[],
  },
}
export default function Resume(oldState,action){
  switch (action.type) {
    case actionTypes.useInfo:
      return{
        ...oldState,
        workplaceResume:{
          ...oldState.workplaceResume,
          infos:[
            ...oldState.workplaceResume.infos,
            action.info,
          ]
        }
      }
    case actionTypes.unUseInfo:
      console.log('action',action)
      let newInfos = oldState.workplaceResume.infos.filter((item) => {
        return item.uuid !== action.info.uuid
      })
      return {
        ...oldState,
        workplaceResume: {
          ...oldState.workplaceResume,
          infos: newInfos,
        },
      }
    case actionTypes.addInfo:
      return {
        ...oldState,
        infoPool: [...oldState.infoPool, action.info]
      }
    default:
      return initState
  }
}