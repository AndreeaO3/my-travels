import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./Quote";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Blablabla
//         </a>
//       </header>
//     </div>
//   );
// }


class App1 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My Travels</h1>
        </header>
        <Quote 
        destination="Barcelona"
        country="Spain"
        distance= "2.757,3 km"
        photo ="http://iaufrance.org/Content/Uploads/CMS/Images/barcelona-spain.jpg"
       />
       <Quote
       destination="Tel Aviv"
       country="Israel"
       distance="2.461,3 km"
       photo="https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/017/Tel_Aviv_Adobe.jpg"
       />
      </div>
    );
  }
}

export default App1;
