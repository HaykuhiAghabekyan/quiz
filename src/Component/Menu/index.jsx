import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './style.module.css';

const  Menu = (props)=>{

  let cls =[classes.menu]
  props.isOpen ? cls.push(classes.menuOpen) :cls.push(classes.menuClose)
let list = [
  {to:'/',text:'Quiz'},
  {to:'/quizList',text:'Quiz List'},
  {to:'/creteQuiz',text:'Create new quiz'},
]

  let [menuList,setMenuList]=useState(list)

  return(
    <div className={cls.join(' ')}>
      <ul>
      {
        menuList.map((menu,ind)=>{
          return (
          <li key={ind}>
              <NavLink to={menu.to}>{menu.text}</NavLink>
          </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default  Menu