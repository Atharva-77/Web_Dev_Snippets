import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import ExCreate from './components/ExerciseCreate';
import ExEdit from './components/ExerciseEdit';
import ExList from './components/ExerciseList';
import ExUser from './components/ExerciseUser';
import Navbar from './components/Navbar'
import Search from './components/SearchUser'
import Login from './components/LoginUser'

function App() {
  return (
    <div className="App">
      <h1>Hello . Welcome to FE</h1>      
      <h2>Hope ypu are doing well</h2>
      <Router >  
        <h4>Navbar is below</h4>
          <Navbar/>
          
          {/*All buttons in Navbar.js  */}
          
          <Route exact path="/">  
            <ExList />
          </Route>

        
          <Route path="/edit/:id">  
            <ExEdit />
          </Route>


          <Route path="/creates">  
            <ExCreate />  
          </Route>  


          <Route path="/user">  
            <ExUser />
          </Route>

          <Route path="/search">  
            <Search />  
          </Route> 

          <Route path="/login">  
            <Login />  
          </Route> 
          

      </Router>

    </div>
  );
}

export default App;
