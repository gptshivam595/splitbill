import React from 'react';
import Header from './Bootstrap/Header';

class App extends React.Component{
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