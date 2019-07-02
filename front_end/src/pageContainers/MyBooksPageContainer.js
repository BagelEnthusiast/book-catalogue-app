import React from 'react';
import SearchBar from '../myBooks/SearchBar'
import AddBookPopup from '../myBooks/AddBookPopup'
import MyBooksContainer from '../myBooks/MyBooksContainer'


class MyBooksPageContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopup: false,
            option1: "",
            option2: "",
            option3: ""
        }
    }

    addBook = (book) => {
        
        let t = book.volumeInfo.title;
        let a = book.volumeInfo.authors[0];
        let i = book.volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=0");
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: t,
                author: a,
                img_url: i,
                username: "nathan"
            })
        })
    }

    searchBooks = (text) => {

        
        console.log(text)
        fetch(`https://www.googleapis.com/books/v1/volumes/?q=${text}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                showPopup: true,
                option1: data.items[0],
                option2: data.items[1],
                option3: data.items[2]
            })
        })
    }

    render() {
        return(
            <div className="container">
                <SearchBar onSearch={this.searchBooks}/>
                {this.state.showPopup ? 
                <AddBookPopup 
                option1={this.state.option1}
                option2={this.state.option2}
                option3={this.state.option3}
                onAddBook={this.addBook}
                /> : null}
                <MyBooksContainer/>
            </div>
        ) 
    }
}

export default MyBooksPageContainer;