import React from 'react';
import classes from './style.module.css';

const ToggleMenu = (props) => {
  let cls = [classes.menuToggle,]
  if (props.open) {
    cls.push(classes.iconOpen)
    cls.push('fa fa-times ')
  } else {
    cls.push(classes.iconClose)
    cls.push('fa fa-bars ')

  }
  return (
    <span
      onClick={() => props.isOpen()}
      className={cls.join(' ')}
    ></span>
  )
}

export default ToggleMenu