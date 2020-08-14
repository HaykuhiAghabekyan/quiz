import React from 'react';
import { connect } from 'react-redux';


const Counter = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Counter {props.counter}</h1>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    counter:state.count,
    name:state.name
  }
}

export default connect(mapStateToProps)(Counter);
