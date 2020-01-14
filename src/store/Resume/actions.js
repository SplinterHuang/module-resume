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
actions.useInfo = function (info) {
  return {
    type:actionTypes.useInfo,
    info,
  }
}
actions.unUseInfo = function (info) {
  return {
    type: actionTypes.unUseInfo,
    info,
  }
}

export default actions