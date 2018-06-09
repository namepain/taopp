export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_SEAT': 
      return [...state, action.seat]
    case 'REMOVE_SEAT':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
