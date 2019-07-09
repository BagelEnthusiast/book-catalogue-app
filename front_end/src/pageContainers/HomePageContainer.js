import React from 'react';
import RecommendedList from '../homePage/RecommendedList'
import HomeBooksContainer from '../homePage/HomeBooksContainer'

//let recommendedTitles

class HomePageContainer extends React.Component {

    constructor() {
        super()
        this.recommendedTitles = [""]
        this.currentBook = ""
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
            
                this.currentBook = randomBook.title
            
            console.log(`random book: ${randomBook.title}`)

        fetch(`https://tastedive.com/api/similar?q=${this.currentBook}&k=339195-BookFind-HBB102QQ`, 
        {headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => res.json())
        .then(data => {
            
            //let shuffledData = data.sort(() => 0.5 - Math.random());
            console.log(data.Similar.Results.slice(0,3).map(book => book.Name))
            
            this.recommendedTitles = data.Similar.Results.slice(0,3).map(book => book.Name)
            console.log(this.recommendedTitles[0])
            
            fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.recommendedTitles[0]}`)
            .then(res => res.json())
            .then(data => {
                console.log("----------")
                console.log(data.items[0])
                this.setState({
                    recommendedBooks: this.state.recommendedBooks.concat(data.items[0])
                })
            })
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
            <div className="container">
                <h4 className="center">Home</h4>
                <RecommendedList books={this.state.recommendedBooks}/>
            </div>

            
        ) 
    }
}

export default HomePageContainer;