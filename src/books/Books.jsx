import React from 'react';
import Book from '../book/Book.jsx';
import './Styles.css'
import books from './Books';

class Books extends React.Component{

    state = {...books};


    getBooks = (mybooks)=>{
      return <Book name={mybooks.name} likes={mybooks.likes} banner={mybooks.banner}/>
    };


    render(){
        console.log(this.state);
        return(
    <div className='books-section'>
                  {Object.keys(this.state).map(x=>{
                      console.log(x);
                      console.log(this.state[x]);
                return this.getBooks(this.state[x]);
                  })}
               


   
        {/* {this.getBooks(this.state.java)}
         {this.getBooks(this.state.javascript)}
        {this.getBooks(this.state.angular)}
        {this.getBooks(this.state.react)} */}



    {/* below code having duplicates so we are using arrow functions */}
        {/* <Book
         name='java concepts' 
         likes='321.ok'
         author='enrich-donald'
         banner='https://static.javatpoint.com/images/usage-of-java-this-keyword.png'/>
          
          <Book
         name='javascript' 
         likes='321.ok'
         author='donald'
         banner='https://4.bp.blogspot.com/-Im7iallm9JY/W2tBLbVPthI/AAAAAAAAAEY/P75gxFl53S8_7volKnO5lWvieT058W2pQCPcBGAYYCw/s1600/tetris%2Bthumbnail.png'/>

         <Book
         name='angular' 
         likes='321.ok'
         author='enrich-donald'
         banner='https://process.filestackapi.com/cache=expiry:max/resize=width:1050/c3STrF8ITAmQqrfA4c7L'/>   

        <Book
         name='react' 
         likes='321.ok'
         author='enrich-donald'
         banner='https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*NUNUmFiNcqYH3hjNjgB70g.jpeg?resize=1440%2C780&ssl=1'/> */}
     </div>
        );
    }
}
export default Books;