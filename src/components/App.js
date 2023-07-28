import React, { component } from 'react';
import Header from "./Bootstrap/Header";

class App extends  component{
  render(){
    return (
      <div className="App">
        <Header>splitbill</Header>
        <Header dark={true}>splitbill</Header>
        <h2>hello</h2>
      </div>
    );
  }
}
export default App;