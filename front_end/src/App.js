import React, { Component } from "react";
import './App.css';

const API = "https://www.googleapis.com/books/v1/volumes/?q=harry_potter_chamber_of_secrets"

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentBook: ""
    }
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
    <div>
      <img src={this.state.currentBook} alt=""/>
      <button onClick={this.addBook}>Add Book</button>
    </div>
  );
  }
}

export default App;

//api access key for tastedive: 339195-BookFind-HBB102QQ
//quota: 300
