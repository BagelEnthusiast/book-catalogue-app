import React, { Component } from "react";
import MyBooksCard from './MyBooksCard'



class MyBooksContainer extends Component {

    constructor() {
        super()
        this.state = {
            displayBooks: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {

            console.log(data)
            let newData = data.filter((book) => book.username === "nathan")
            console.log(newData)
            this.setState({
                displayBooks: newData
            })
        })
    }

    render() {
        
        return(
        <div>
           {this.state.displayBooks.map(book => <MyBooksCard book={book} key={book._id}/>)}
        </div>
        )
    }

}

export default MyBooksContainer;