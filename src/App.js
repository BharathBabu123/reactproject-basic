import React from 'react';
// import Book from './book/Book.jsx';
import Books from './books/Books.jsx';
import Calculator from './calculator/Calculator.jsx';
import Lifecycle from './componentlifecycle/Componentlifecycle.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



// functional components in book folder
// class components in books folder
function App() {
  const helloworld = <h1>Regnant</h1>
  return (
    <div className="App">
      {helloworld}
      <h1>Indiranagar</h1>
      <hr/>


      <Router>
        {/* <Calculator/>
        <Lifecycle a={10}/>
        <Books/> */}
        <div className="links">
           <Link to ="/Books">Books</Link><br/>
           <Link to = "/calc">Calculator</Link><br/>
           <Link to = "/componentlifecycle">componentlifecycle</Link>
        </div>
          <hr/>

        <Route path="/Books" component={Books}/>
        <Route  path="/calc" component={Calculator}/>
        <Route path="/componentlifecycle" component={Lifecycle}/>
      </Router>




      {/* books app */}

      


      {/* <Book 
         name='java concepts' 
         likes='321.ok'
         author='enrich-donald'
         banner='https://static.javatpoint.com/images/usage-of-java-this-keyword.png'/> */}
    </div>
  );
}

export default App;
