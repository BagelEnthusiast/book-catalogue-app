import React from 'react';
import SearchBar from '../myBooks/SearchBar'
import AddBookPopup from '../myBooks/AddBookPopup'
import MyBooksContainer from '../myBooks/MyBooksContainer'
import MyBooksFilter from '../myBooks/MyBooksFilter'


class MyBooksPageContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopup: false,
            option1: "",
            option2: "",
            option3: "",
            displayBooks: [],
            currentUser: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem("currentUser") === null ){
            this.props.history.push('/login')
        } else {
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            let newData = data.filter((book) => book.username === localStorage.getItem("currentUser"))
            this.setState({
                displayBooks: newData
            })
        })
        }//end else statement
    }
    
    rateBook = (id, number) => {
        
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: number
            })
        }).then(res => res.json() )
        .then(data => {
            
            if (data.ok) {
                
                let newBook = this.state.displayBooks.find(b => b._id === id)
                let i = this.state.displayBooks.indexOf(newBook)
                this.state.displayBooks[i].rating = number
                let newArr = this.state.displayBooks
                this.setState({
                    displayBooks: newArr
                })
            }
            //let book = data.filter(book => book._id === )
        })
    }

    closePopup = () => {
        this.setState({
            showPopup: false
        })
    }

    addBook = (book) => {
        let id = localStorage.getItem("userId")
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
                username: localStorage.getItem("currentUser"),
                userId: id,
                currentPage: 1,
                rating: 0
            })
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                displayBooks: this.state.displayBooks.concat(data.createdBook),
                showPopup: false
            })
        })
    }

    deleteBook = (book) => {
        
        fetch(`http://localhost:4000/books/${book._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let newList = this.state.displayBooks.filter(b => book._id !== b._id)
            console.log(data)
            this.setState({
                displayBooks: newList
            })
        })
    }

    searchBooks = (text) => {
        
        if (text === "") {
            return
        }

        fetch(`https://www.googleapis.com/books/v1/volumes/?q=${text}&key=AIzaSyDGuZDyQ8yrKmix3doGG7lCNXZKMcFEZys`)
        .then(res => res.json())
        .then(data => {
            
            let newData = data.items.filter(book => book.volumeInfo.imageLinks !== undefined)
            this.setState({
                showPopup: true,
                option1: newData[0],
                option2: newData[1],
                option3: newData[2]
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
                onClose={this.closePopup}
                /> : null}
                <MyBooksFilter/>
                <MyBooksContainer displayBooks={this.state.displayBooks} onDelete={this.deleteBook} onRate={this.rateBook}/>
            </div>
        ) 
    }
}

export default MyBooksPageContainer;