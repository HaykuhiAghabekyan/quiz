import React from 'react';
import { connect } from 'react-redux';


const Button = (props) => {

  console.log(props);

  return (
    <div>
      <button onClick={props.add}>+ 1</button>
      <button onClick={props.sup}>- 1</button>
    </div>
  );
}

// action ->object  {type:''}
let mapDispatchToProps = (dispach) => {

  return {
    add: () => dispach({ type: 'ADD' }),
    sup: () => dispach({ type: 'SUP', payload: 5 }),
  }

}


export default connect(null, mapDispatchToProps)(Button);
