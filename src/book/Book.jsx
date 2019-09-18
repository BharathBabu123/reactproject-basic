import * as React from 'react';
import './Style.css';


class Book extends React.Component{
    render(){
        return (
            <div className='movie-card'>
                <img src = {this.props.banner}/>
                <label>
                      {this.props.likes} {this.props.name} {this.props.author}
                </label>
                </div>  
        );
    }
}



// function Book(props){
//     return (
//         <div className='movie-card'>
//             <img src = {props.banner}/>
//             <label>
//                   {props.likes} {props.name} {props.author}
//             </label>
//             </div>  
//     );
// }

export default Book;