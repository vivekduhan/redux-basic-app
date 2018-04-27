
export function selectBook(book) {
    //return an action object with the type of the action and payload
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}
