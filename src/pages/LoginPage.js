import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅을 사용

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    fetch("[url]", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("로그인 성공!");
          navigate("/starter1");
        } else {
          throw new Error("네트워크 오류 발생");
        }
      })
      .catch((error) => {
        console.error("오류 발생:", error);
      });
  };

  const onClickRegister = () => {
    navigate("/Join");
  };

  return (
    <div>
      <div style={{ width: "200px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onClickLogin}
        >
          <h1>로그인</h1>
          <label className="labelStyle">UserName</label>
          <input
            type="text"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디를 입력하세요"
          />
          <label>Password</label>
          <input
            type="password"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력하세요"
          />
          <br />
          <button type="submit">Login</button>

          <button type="button" onClick={onClickRegister}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
