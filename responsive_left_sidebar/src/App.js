import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;


// First Component i.e. App 

// First component i.e App 

// import React, { useState } from 'react'; 
// import './App.css'
// import Component2 from './Component2'; 

// function App() { 

// 	const [state, setstate] = useState({data:""}) 

// 	const changeState = () => { 
// 		setstate({data:`state/props of parent component 
// 		is send by onClick event to another component`}); 
// 	}; 

// 	return ( 
// 		<div className="App"> 
// 			<Component2 data={state.data} /> 
// 			<div className="main-cointainer"> 
// 				<h2>Compnent1</h2> 
// 				<button onClick={changeState} type="button"> 
// 				Send state 
// 				</button>	 
// 			</div> 
// 		</div>				 
// 	); 
// } 

// export default App;
