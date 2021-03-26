import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import History from "./History";
import Profiles from "./Profiles";
import BrowserHistory from "./BrowserHistory";
import BrowserHistory02 from "./BrowserHistory02";
import RRdom from "./RRdom";

const App = () => {
  return (
    <div>
      <RRdom />
      <hr />
      <BrowserHistory />
      <BrowserHistory02 />
      {/* 네비게이션 부분 */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
      </ul>

      <hr />

      {/* ------------------------- */}
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={History} />
    </div>

    // 이렇게 nav 부분 Link와 Route 부분이 상호관계가 일치해야한다.
    // Profile를 통해 Route 안에 또 내부 Route를 넣을 수 있음.
  );
};

export default App;
