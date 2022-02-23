import React, { useState } from "react";

const LoginControl = ({ isLoggedIn, viewWord }) => {
  return <button onClick={isLoggedIn}>{viewWord}</button>;
};

const AccessControl = () => {
  const [isLogin, setIsLogin] = useState(false);
  const logWord = isLogin ? "ログアウト" : "ログイン";

  return (
    <LoginControl isLoggedIn={() => setIsLogin(!isLogin)} viewWord={logWord} />
  );
};

export default function App() {
  return <AccessControl />;
}
