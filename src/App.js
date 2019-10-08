import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       {this.props.children}
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

      return (
          <div>
           {this.props.children}
        </div>)          
        
  }
}
