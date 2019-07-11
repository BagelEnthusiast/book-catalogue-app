import React from 'react';
import RecommendedList from '../homePage/RecommendedList'
//import HomeBooksContainer from '../homePage/HomeBooksContainer'
import _ from 'lodash'

//let recommendedTitles

class HomePageContainer extends React.Component {

    constructor() {
        super()
        this.authorRecommendedTitles = [""]
        this.recommendedTitles = [""]
        this.currentBook = ""
        this.currentAuthor = ""
        this.state = {
            authorBooks: [],
            recommendedBooks: [],
            authorRecommendedBooks: []
        }
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
    }

    componentDidMount() {
        if (localStorage.getItem("currentUser") === null ){
            this.props.history.push('/login')
        } else {
        //let recommendedTitles
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            let newData = data.filter((book) => book.username === localStorage.getItem("currentUser"))
            let randomBook = newData[Math.floor(Math.random()*newData.length)]
            let secondBook = newData[Math.floor(Math.random()*newData.length)]
                this.currentAuthor = secondBook.author
            console.log(randomBook)
                this.currentBook = randomBook.title
                //this.currentAuthor = randomBook.author
            
            console.log(`random book: ${randomBook.title}`)

        fetch(`https://tastedive.com/api/similar?q=${this.currentBook}&type=books&k=339195-BookFind-HBB102QQ`, 
        {headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => res.json())
        .then(data => {
            let newData = _.shuffle(data.Similar.Results)
            //let newData = data.Similar.Results.slice(0,3).map(book => book.Name)
            let preview = newData.slice(0,3).map(book => book.Name)
            this.recommendedTitles = preview
            for (let index = 0; index < 3; index++) {
                
                fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.recommendedTitles[index]}&key=AIzaSyDGuZDyQ8yrKmix3doGG7lCNXZKMcFEZys`)
                .then(res => res.json())
                .then(data => {
                    let newData = data.items.filter(book => book.volumeInfo.imageLinks !== undefined)
                    this.setState({
                        recommendedBooks: this.state.recommendedBooks.concat(newData[0])
                    })
                })
            }
           
        })
               fetch(`https://tastedive.com/api/similar?q=${this.currentAuthor}&type=books&k=339195-BookFind-HBB102QQ`, 
        {headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => res.json())
        .then(data => {
            let newData = _.shuffle(data.Similar.Results)
            //let newData = data.Similar.Results.slice(0,3).map(book => book.Name)
            let preview = newData.slice(0,3).map(book => book.Name)
            this.authorRecommendedTitles = preview
            for (let index = 0; index < 3; index++) {

                 fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.authorRecommendedTitles[index]}`)
                .then(res => res.json())
                .then(data => {

                     this.setState({
                        authorRecommendedBooks: this.state.authorRecommendedBooks.concat(data.items[0])
                    })
                })
            }

         })
        })
    }//end else statement
        
    }

    render() {
        return(

            
            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <div className="container">
                <h4 className="center">Because you liked {this.currentBook}:</h4>
                <RecommendedList books={this.state.recommendedBooks} onAddBook={this.addBook}/>
                {/* <RecommendedList books={this.state.recommendedBooks}/> */}
                
            </div>
            <div className = "container">
            <h4 className="center">More from authors like {this.currentAuthor}:</h4>
            <RecommendedList books={this.state.authorRecommendedBooks}/>
            </div>
            </div>

            
        ) 
    }
}

export default HomePageContainer;