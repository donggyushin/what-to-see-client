import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const cx = classNames.bind(styles);

const responseFacebook = response => {
  console.log(response);
};

const Login = ({
  username,
  password,
  handleInput,
  clickSignIn,
  clickFacebookLoginButton
}) => (
  <div className={cx("container")}>
    <Left
      username={username}
      password={password}
      handleInput={handleInput}
      clickSignIn={clickSignIn}
      clickFacebookLoginButton={clickFacebookLoginButton}
    />
    <Right />
  </div>
);

const Left = ({
  username,
  password,
  handleInput,
  clickSignIn,
  clickFacebookLoginButton
}) => (
  <div className={cx("LeftContainer")}>
    <div className={cx("box")}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <button className={cx("SignButton")} onClick={clickSignIn}>
        Sign In
      </button>
      <Link to="/signup">
        <button className={cx("SignButton")}>Sign Up</button>
      </Link>

      {/* <Link to="/" className={cx("FBbutton")}>
        <img
          src={require("../../media/facebooklogin.png")}
          alt="facebook login"
        />
      </Link> */}

      {/* <FacebookLogin
        appId="222404618630234"
        autoLoad={true}
        onClick={clickFacebookLoginButton}
        callback={responseFacebook}
      /> */}
    </div>
  </div>
);

const Right = () => (
  <div className={cx("RightContainer")}>
    <div className={cx("box")}>
      <h1>Welcome To What To See!</h1>
      <p>Please Sign In to join Amazing Movie introduction Web Service</p>
      <h3>What can i do in What To See web service?</h3>

      <img
        className={cx("main")}
        alt="main"
        src={require("../../media/1.png")}
      />
      <img
        className={cx("detail")}
        alt="detail"
        src={require("../../media/4.png")}
      />
      <img
        className={cx("suggestions")}
        alt="suggestions"
        src={require("../../media/5.png")}
      />

      {/* <p>
        At first, you can check what movies are the most hot in torrent, at
        first page, unfortunately, you can see only 50 movies in order by
        population with download count, but if you click some movie, then you
        will be recommended similar movies with your choices! Then you can see
        the score of that Movie, and also you can put your score that movie, and
        also you can leave comment on that movie detail page! there are pretty a
        lot of contents, so don't be hesitate, just let's join! if you mind to
        sign up to our website, then you can join with your facebook account
        also!
      </p> */}
      <span>And we also are preparing to make search var!</span>
      <a href="https://www.utorrent.com/intl/ko/">
        <img
          className={cx("torrent")}
          src={require("../../media/torrent.jpeg")}
          alt="torrent"
        />
      </a>
    </div>
  </div>
);

export default Login;
