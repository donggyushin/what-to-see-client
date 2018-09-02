import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Login = () => (
  <div className={cx("container")}>
    <Left />
    <Right />
  </div>
);

const Left = () => (
  <div className={cx("LeftContainer")}>
    <div className={cx("box")}>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button className={cx("SignButton")}>Sign In</button>

      <button className={cx("SignButton")}>Sign Up</button>

      <Link to="/api/auth/facebook" className={cx("FBbutton")}>
        <img
          src={require("../../media/facebooklogin.png")}
          alt="facebook login"
        />
      </Link>
    </div>
  </div>
);

const Right = () => (
  <div className={cx("RightContainer")}>
    <div className={cx("box")}>
      <h1>Welcome To What To See!</h1>
      <p>Please Sign In to join Amazing Movie introduction Web Service</p>
      <h3>What can i do in What To See web service?</h3>
      <p>
        At first, you can check what movies are the most hot in torrent, at
        first page, unfortunately, you can see only 50 movies in order by
        population with download count, but if you click some movie, then you
        will be recommended similar movies with your choices! Then you can see
        the score of that Movie, and also you can put your score that movie, and
        also you can leave comment on that movie detail page! there are pretty a
        lot of contents, so don't be hesitate, just let's join! if you mind to
        sign up to our website, then you can join with your facebook account
        also!
      </p>
      <span>And we also are preparing to make search var!</span>
      <a href="https://www.utorrent.com/intl/ko/">
        <img src={require("../../media/torrent.jpeg")} alt="torrent" />
      </a>
    </div>
  </div>
);

export default Login;
