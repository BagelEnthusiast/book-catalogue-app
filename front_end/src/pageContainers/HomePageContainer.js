import React from 'react';
import RecommendedList from '../homePage/RecommendedList'
import HomeBooksContainer from '../homePage/HomeBooksContainer'
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

    componentDidMount() {
        //let recommendedTitles
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            let newData = data.filter((book) => book.username === localStorage.getItem("currentUser"))
            let randomBook = newData[Math.floor(Math.random()*newData.length)]
            console.log(randomBook)
                this.currentBook = randomBook.title

                // let secondBook = newData[Math.floor(Math.random()*newData.length)]
                // this.currentAuthor = secondBook.author
            
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
                
                fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.recommendedTitles[index]}`)
                .then(res => res.json())
                .then(data => {
                    
                    this.setState({
                        recommendedBooks: this.state.recommendedBooks.concat(data.items[0])
                    })
                })
            }
           
        })
        //  fetch(`https://tastedive.com/api/similar?q=${this.currentAuthor}&type=books&k=339195-BookFind-HBB102QQ`, 
        // {headers: {
        //     'Content-Type': 'application/json'
        // }})
        // .then(res => res.json())
        // .then(data => {
        //     let newData = _.shuffle(data.Similar.Results)
        //     //let newData = data.Similar.Results.slice(0,3).map(book => book.Name)
        //     let preview = newData.slice(0,3).map(book => book.Name)
        //     this.authorRecommendedTitles = preview
        //     for (let index = 0; index < 3; index++) {
                
        //         fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.authorRecommendedTitles[index]}`)
        //         .then(res => res.json())
        //         .then(data => {
                    
        //             this.setState({
        //                 authorRecommendedBooks: this.state.authorRecommendedBooks.concat(data.items[0])
        //             })
        //         })
        //     }
           
        // })
        })

    

        
    }

    render() {
        return(
            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <div className="container">
                <h4 className="center">Because you liked {this.currentBook}:</h4>
                <RecommendedList books={this.state.recommendedBooks}/>
                {/* <RecommendedList books={this.state.recommendedBooks}/> */}
                
            </div>
            
            {/* <h4>More from authors like {this.currentAuthor}:</h4> */}
            {/* <RecommendedList books={this.state.authorRecommendedBooks}/> */}
            </div>

            
        ) 
    }
}

export default HomePageContainer;