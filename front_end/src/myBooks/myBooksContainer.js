import React, { Component } from "react";
import MyBooksCard from './MyBooksCard'



class MyBooksContainer extends Component {

    render() {
        
        return(
        <div>
           {this.props.displayBooks.map(book => <MyBooksCard book={book} key={book._id}/>)}
        </div>
        )
    }

}

export default MyBooksContainer;