import logo from './logo.svg';
//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './component/Navbar';
import BookList from './component/BookList';
import BookDetails from './component/BookDetails';
import Home from './component/Home';
function App() {
  return (
    <>
      <Router>
      <NavBar/>
      
      {/* <BookDetails/> */}
        <Switch>
        <Route exact path='/book_details/:id' component = {BookDetails} /> 
        <Route exact path='/' component = {Home} />  
        <Route exact path='/booklist' component = {BookList} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
