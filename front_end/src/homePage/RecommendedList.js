import React from 'react';
import './RecommendedList.css'
import HomeBookCard from './HomeBookCard'

class RecommendedList extends React.Component {

render() {
    // return(
    //     <div className="card middle">
    //         <div className="front">
    //             <img src="img.jpg" alt=""/>
    //         </div>
    //         <div className="back">
    //             <div className="back-content middle">
    //                 <h2>Book Title</h2>
    //                 <span>Book Author</span>
    //                 <button></button>
    //                 <button></button>
    //             </div>
    //         </div>
    //     </div>

    // )

    return(
        <div style={{width: "100%"}}>
            <div style={{width: "900px", marginLeft: "auto", marginRight: "auto"}}>
           {this.props.books.map(book => <HomeBookCard book={book} key={book.id}/>)}
            </div>
        </div>
        )
}
}

export default RecommendedList;