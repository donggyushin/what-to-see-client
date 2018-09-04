import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignUp = ({
  username,
  password,
  displayName,
  handleInput,
  clickSignUpButton,
  history
}) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <input
        name="username"
        value={username}
        placeholder="username"
        type="text"
        onChange={handleInput}
      />
      <input
        name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={handleInput}
      />
      <input
        name="displayName"
        value={displayName}
        placeholder="display name"
        onChange={handleInput}
        type="text"
      />
      <button onClick={clickSignUpButton}>Sign Up</button>

      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Sign In
      </button>
    </div>
    <div className={cx("right")}>
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

export default SignUp;
