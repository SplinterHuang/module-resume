import actionTypes from "./actionType"
const actions = {}
actions.init = function init(resumeInfo){
  return {
    type: actionTypes.initResumeFromConfig,
    resumeInfo,
  }
}
actions.addInfo = function(info) {
  return {
    type:actionTypes.addInfo,
    info,
  }
}



export default actions