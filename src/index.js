import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "darkblue" }}> Home </NavLink>
      <NavLink to="/about" style={linkStyles} activeStyle={{ background: "darkblue" }}> About </NavLink>
      <NavLink to="/login" style={linkStyles} activeStyle={{ background: "darkblue" }}> Login </NavLink>
      <NavLink to="/messages" style={linkStyles} activeStyle={{ background: "darkblue" }}> Msgs </NavLink>
      <NavLink to="/signup" style={linkStyles} activeStyle={{ background: "darkblue" }}> Sign Up </NavLink>
    </div>

  )
}
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function Messages () {
  return(
    <h1>My Messages</h1>
  )
}

function SignUp () {
  return(
    <h1>Sign up here!</h1>
  )
}

function About() {
  return (
    <div>
      <h1>This is My About Component!</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>

      </Switch>
    </div>


  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  , document.getElementById("root"));
