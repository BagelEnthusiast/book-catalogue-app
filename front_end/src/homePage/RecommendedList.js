import React from 'react';
import './RecommendedList.css'
import HomeBookCard from './HomeBookCard'

class RecommendedList extends React.Component {

render() {
   
    return(
        <div style={{width: "100%"}}>
            <div style={{width: "900px", marginLeft: "auto", marginRight: "auto"}}>
           {this.props.books.map(book => <HomeBookCard book={book} key={book.id} onAdd={this.props.onAddBook}/>)}
            </div>
        </div>
        )
}
}

export default RecommendedList;