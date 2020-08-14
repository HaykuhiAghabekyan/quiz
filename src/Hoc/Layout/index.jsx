import React ,{useState}from 'react';
import classes from './style.module.css';
import ToggleMenu from './../../Component/UI/menuToggle.jsx';
import Menu from './../../Component/Menu'
const Layout = (props) => {

const[isOpen, setIsOpen] = useState(false)

function setOpen(){
  setIsOpen(!isOpen)
}
  return (
    <main className={classes.layout}>
      <ToggleMenu isOpen = {setOpen} open={isOpen}/>
      <Menu isOpen = {isOpen}/>
      {props.children}
    </main>
  );
}

export default Layout;
