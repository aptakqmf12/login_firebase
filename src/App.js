import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./fBase";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const onChangeRegiter = (e) => {
    let {
      target: { name, value },
    } = e; //구조분해
    if (name === "email") {
      setRegisterEmail(value);
    } else if (name === "password") {
      setRegisterPassword(value);
    }
  };
  const onChangeLogin = (e) => {
    let {
      target: { name, value },
    } = e; //구조분해
    if (name === "email") {
      setLoginEmail(value);
    } else if (name === "password") {
      setLoginPassword(value);
    }
  };

  const onSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("로그인 되었습니다");
      })
      .catch((err) => {
        console.log(err.message);
      });

    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  };

  const onLogout = async () => {
    await signOut(auth);
    alert("로그아웃 되었습니다");
  };

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <form onSubmit={onSignUp}>
          <input
            name="email"
            type="email"
            required
            value={registerEmail}
            onChange={onChangeRegiter}
            placeholder="이메일 주소"
          />

          <input
            name="password"
            type="password"
            required
            value={registerPassword}
            onChange={onChangeRegiter}
            placeholder="비밀번호"
          />

          <br />
          <button type="submit" value="회원가입">
            회원가입
          </button>
        </form>
      </div>

      <div style={{ marginBottom: 30 }}>
        <form onSubmit={onLogin}>
          <input
            name="email"
            type="email"
            required
            value={loginEmail}
            onChange={onChangeLogin}
            placeholder="이메일 주소"
          />

          <input
            name="password"
            type="password"
            required
            value={loginPassword}
            onChange={onChangeLogin}
            placeholder="비밀번호"
          />

          <br />
          <button type="submit" value="회원가입">
            로그인
          </button>
        </form>
      </div>

      <div>{currentUser && currentUser.email}</div>
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
}

export default App;
