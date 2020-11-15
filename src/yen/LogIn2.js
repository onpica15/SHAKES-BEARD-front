import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function LogIn(props) {
  const MySwal = withReactContent(Swal);
  const {
    isAuth,
    setIsAuth,
    account,
    setAccount,
    password,
    setPassword,
  } = props;

  const [visible, setVisible] = useState(false);

  function memberIoginForm() {
    const url = "http://localhost:3000/yen/log";

    // const fd = new FormData(document.memberForm)

    // console.log(fd)
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ account, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((r) => r.json())

      .then((o) => {
        console.log("react收到的", o);
        if (o.success) {
          setIsAuth(true);
          localStorage.setItem("data", JSON.stringify(o));
          localStorage.setItem("auth", true);

          // setIsAuth = (JSON.parse(localStorage.getItem('auth')))
        } else {
          alert("帳號／密碼錯誤");
          setPassword("");
          setAccount("");
        }
      });
  }

  //   // 注意資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: JSON.stringify(newData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   console.log(JSON.stringify(newData))

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('伺服器回傳的json資料', data)
  //   // 要等驗証過，再設定資料(簡單的直接設定)

  //   //直接在一段x秒關掉指示器
  //   setTimeout(() => {
  //     alert('儲存完成')
  //     props.history.push('/')
  //   }, 500)
  // }

  // // const [account, setAccount] = useState("");
  // // const [password, setPassword] = useState("");

  if (isAuth === true) {
    //  function alertTest() {
    //   Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    //   )

    // }
    //  setTimeout(() => {
    //       alertTest();
    //   }, 1)
    return <Redirect to="/homepage" />;
  }

  return (
    <>
      <div className="bagimg">
        <div className="bagimg2">
          <div className="loginCard">
            <div className="loginTittle">登入</div>

            <form
              className="loginWeb d-flex flex-column"
              // method="POST"
              name="memberForm"
              // novalidate
              onSubmit={(e) => {
                e.preventDefault();
                memberIoginForm();
              }}
            >
              <div className="log ">
                <div className="loginArea1">
                  <lable for="account" className="logText_">
                    帳號
                  </lable>
                  <input
                    className="loginInput"
                    name="account"
                    type="text"
                    id="account"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                  ></input>

                  <label for="password" className="logText_ d-flex flex-column">
                    密碼
                  </label>
                  <input
                    className="loginInput"
                    name="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>

                  <div className="logText_2">忘記密碼</div>

                  <button
                    type="submit"
                    // onClick={() => { memberIoginForm() }}
                    className="loginCheckButton loginMobile"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   memberIoginForm()
                    // }}
                  >
                    登入
                  </button>
                </div>

                <div className="loginArea2 ">
                  <div className="otherAccount">
                    <button className="otherLogButton facebook">
                      <div className="d-flex justify-content-around align-items-center">
                        <img src={facebook} className="lognIcon "></img>
                        使用Facebook登入<div></div>
                      </div>
                    </button>

                    <button className="otherLogButton twitter">
                      <div className="d-flex justify-content-around align-items-center">
                        <img src={twitter} className="lognIcon"></img>
                        使用Twitter登入<div></div>
                      </div>
                    </button>

                    <button className="otherLogButton google">
                      <div className="d-flex justify-content-around align-items-center">
                        <img src={google} className="lognIcon"></img>
                        使用Google登入<div></div>
                      </div>
                    </button>

                    <Link to="/signup">
                      <button className="loginSingUpButton loginMobile">
                        註冊帳號
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </form> */}
              <div className="d-flex justify-content-around ">
                <button
                  type="submit"
                  className="loginCheckButton loginWebNone"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   memberIoginForm();

                  // if (authAccount === account && authPassword === password) {
                  //   setIsAuth(true);
                  //   alert("登入成功");
                  // } else {
                  //   alert("帳號/密碼錯誤");
                  // }
                  // }}>
                >
                  登入
                </button>
                <Link to="/signup">
                  <button className="loginSingUpButton loginWebNone">
                    註冊帳號
                  </button>
                </Link>
              </div>
            </form>

            <div className="loginMobile"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;