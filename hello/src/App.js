import React from 'react';
import APICall from './components/APICall';
import Container from './components/Container';
import Counter from './components/Counter';
import Interval from './components/Interval';
import Password from './components/Password';

class App extends React.Component {
  render(){
    return(
      <div> 

      <h2> Hi, I am Deuel ....</h2>
      {/* {<Counter/> }
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}
<APICall/>
      {/* <Password/>  */}
      {/* <Container/> */}
      {/* <Interval/> */}
      </div>
    )
  }
}

export default App;
