import React, { Component } from "react";
import NavBar from './NavBar'
import { BrowserRouter, Route} from 'react-router-dom'
import HomePageContainer from './pageContainers/HomePageContainer'
import MyBooksPageContainer from './pageContainers/MyBooksPageContainer'
import ProfilePageContainer from './pageContainers/ProfilePageContainer'
import LoginPageContainer from './pageContainers/LoginPageContainer'

const API = "https://www.googleapis.com/books/v1/volumes/?q=harry_potter_chamber_of_secrets"

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentBook: ""
    }
  }

  createUser = (username, password) => {
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username, password: password, reviews: []
      })
    })
  }

  addBook = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      let newImg = data.items[0].volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=0")
      this.setState({
        currentBook: newImg
      })
    })
    console.log(this.state.currentBook)
    
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
       console.log(data.items[0].volumeInfo.title)
       console.log(data.items.map(book => book.volumeInfo))
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path='/' component={HomePageContainer}/>
          <Route path='/mybooks' component={MyBooksPageContainer}/>
          <Route path='/profile' component={ProfilePageContainer}/>
          <Route path='/login' component={LoginPageContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//api access key for tastedive: 339195-BookFind-HBB102QQ
//quota: 300
