import React, { Component } from "react";
import MyBooksCard from './MyBooksCard'



class MyBooksContainer extends Component {

    render() {
        
        return(
        <div style={{width: "100%"}}>
            <div style={{width: "900px", marginLeft: "auto", marginRight: "auto"}}>
           {this.props.displayBooks.map(book => <MyBooksCard book={book} key={book._id} onDelete={this.props.onDelete} onRate={this.props.onRate}/>)}
            </div>
        </div>
        )
    }

}

export default MyBooksContainer;