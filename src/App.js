import React, { useState } from "react";

const LoginControl = ({ isLoggedIn, viewWord }) => {
  return <button onClick={isLoggedIn}>{viewWord}</button>;
};

const AccessControl = () => {
  const [isLogin, setIsLogin] = useState(false);
  // ボタンの表示文字を状態によって変更
  const logWord = isLogin ? "ログアウト" : "ログイン";
  return (
    // ログイン、ログアウトボタンを表示
    <LoginControl isLoggedIn={() => setIsLogin(!isLogin)} viewWord={logWord} />
  );
};

export default function App() {
  return <AccessControl />;
}
