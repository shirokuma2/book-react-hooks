import React, { useState } from "react";

const LogoutButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログアウト</button>;
};

const LoginButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログイン</button>;
};

const LoginControl = () => {
  const [isLoggetIn, setLoggetInState] = useState(false);

  const toggleIsLoggedIn = () => setLoggetInState(!isLoggetIn);

  if (isLoggetIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
