import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item' >
          {book.title}
        </li>
      );
    })

    );
  }
  render() {
    return (
      <ul className= 'list-group col-sm-4' >
        {this.renderList()}
      </ul>
    );
  }
}

//this takes the state and whatever is returned from this function will be the props for the component
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

//whatever is returned from this function will be the props for the compnent
function mapDispatchToProps(dispatch){
  //this bind all this actions to the reducers that these actions will be dispatched to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
