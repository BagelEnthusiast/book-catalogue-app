import React from 'react';
import RecommendedList from '../homePage/RecommendedList'
import HomeBooksContainer from '../homePage/HomeBooksContainer'
import _ from 'lodash'

//let recommendedTitles

class HomePageContainer extends React.Component {

    constructor() {
        super()
        this.recommendedTitles = [""]
        this.currentBook = ""
        this.currentAuthor = ""
        this.state = {
            authorBooks: [],
            recommendedBooks: []
        }
    }

    componentDidMount() {
        //let recommendedTitles
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            let newData = data.filter((book) => book.username === localStorage.getItem("currentUser"))
            let randomBook = newData[Math.floor(Math.random()*newData.length)]
            console.log(randomBook)
                this.currentBook = randomBook.title
                this.currentAuthor = randomBook.author
            
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
        })

    

        
        
        // .then(fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.recommendedTitles[1]}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("----------")
        //     console.log(data.items[0])
        //     this.setState({
        //         recommendedBooks: this.state.recommendedBooks.concat(data.items[0])
        //     })
        // })
        // )
        // .then(fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.recommendedTitles[2]}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("----------")
        //     console.log(data.items[0])
        //     this.setState({
        //         recommendedBooks: this.state.recommendedBooks.concat(data.items[0])
        //     })
        // })
        // )
        
    }

    render() {
        return(
            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <div className="container">
                <h4 className="center">Because you liked {this.currentBook}:</h4>
                <RecommendedList books={this.state.recommendedBooks}/>
                {/* <RecommendedList books={this.state.recommendedBooks}/> */}
                
            </div>
            
            <h4>More from authors like {this.currentAuthor}:</h4>
            </div>

            
        ) 
    }
}

export default HomePageContainer;