import React, { useState } from 'react';

const Auth = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [ConfPassword, setConfPassword] = useState('');

  const [userNameLogin, setUserNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  function register(e) {
    e.preventDefault()

    if (userName && password && password === ConfPassword) {
      let user = {
        userName, password
      }
      user = JSON.stringify(user);//obj->json
      localStorage.setItem('user', user)
    }
    console.log(localStorage.getItem('user'));

  }
  
  function login(e){
    e.preventDefault();
    let user = localStorage.getItem('user');
    user = JSON.parse(user) //json->obj

    if(user.userName === userNameLogin && user.password === passwordLogin){
      props.history.push('/quizList')
    }
  }

  return (
    <div>
      <section>
        <form action="" onSubmit={register}>
          <input type="text" placeholder="userName"
            onChange={(e) => setUserName(e.target.value)} />
          <input type="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)} />
          <input type="possword" placeholder="confirm password"
            onChange={(e) => setConfPassword(e.target.value)} />
          <button>Register</button>
        </form>
      </section>
      <section>
        <form action="" onSubmit={login}>
          <input
            type="text"
            placeholder="userName"
            onChange={(e) => setUserNameLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <button>Login</button>
        </form>
      </section>
    </div>
  );
}

export default Auth;
