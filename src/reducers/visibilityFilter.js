const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// const visibilityFilter = function (state,action) {
// 	console.log("visibilityFilter111111111111111111111111111111111")
// 	console.log(state)
// 	console.log(action)
// 	var state = 'SHOW_ALL';
// 	var go = function () {
// 	  switch (action.type) {
// 	    case 'SET_VISIBILITY_FILTER':
// 	      return action.filter
// 	    default:
// 	      return state
// 	  }
// 	}
// 	return go()
// }

export default visibilityFilter
