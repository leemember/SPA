import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      
      {/* 네비게이션 부분 */}
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profile/velopert">velopert 프로필 소개</Link></li>
        <li><Link to="/profile/gildong">gildong 프로필 소개</Link></li>
      </ul>

      <hr />

      {/* ------------------------- */}
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about', '/info']} component={About}/>    
      <Route path="/profile/:username" component={Profile}/>          
    </div>
    
    // 이렇게 nav 부분 Link와 Route 부분이 상호관계가 일치해야한다.
  );
}

export default App;
