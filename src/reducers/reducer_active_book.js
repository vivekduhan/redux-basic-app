//here state is not the application state, but only the state this reducer is responsible for .
//eg. root reducer activeBook key
export default function (state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED' :
      return action.payload;
  }
  return state;
}
