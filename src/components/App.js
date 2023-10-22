import React from 'react';
import Header from './Bootstrap/Header';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header
        dark={true}
       // headerclassName="justify-content-center" 
        className="Header"
        >  
        
          <a class="two" href="#home">Home</a>
          <a class="three" href="#news">News</a>
          <a class="four" href="#contact">Contact</a>
          <a class="five" href="#about">About</a>

          <a class="one" href="default.asp" target="_blank">HELP</a>
        </Header>

        <body>
        
        </body>
          <h2 id="split" data-text="SPLITBILL">SPLITBILL</h2>
          <h5>Search: <input type="text" id="ip1" name="search"></input><br></br></h5>
          <h6>
            <font color="white">
            first name:<input type="text" id="ip2" name="firstname"></input><br></br>
            second name:<input type="text" id="ip3" name="secondname"></input>
            </font>
          </h6>
        <div class ="container">
        </div>
        <table>
          <tr>
            <th>heading</th>
            <th>heading2</th>
          </tr>
          <tr>
            <td>row</td>
            <td>row2</td>
          </tr>
        </table>
        </div>
        
    );
  }       
} 
export default App; 