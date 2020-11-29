# SPA (Single Page Application)

SPA는 싱글 페이지 애플리케이션의 약어이다.
말그대로 한 개의 페이지로 이루어진 애플리케이션임.

리액트 같은 라이브러리 혹은 프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우저가 담당하도록 한다.
애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트 해준다.

EX) 블로그를 개발한다면 <홈 / 포스트목록 / 포스트 / 글쓰기> 화면이 있는데, SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있다.

다른 주소에 다른 화면을 보여주는 것을 <b>라우팅</b> 이라고 한다.

리액트 라이브러리는 리액트라우터, 리치 라우터, Next.js 가 있는데
거의 리액트 라우터로 진행한다.

<b>리액트 라우터</b>는 아주 간단하게 구현할 수 있도록 해준다.
더 나아가 나중에 서버 사이드 렌더링을 할 때도 라우팅을 도와주는 컴포넌트를 제공해준다.

<br>
<br>

## SPA의 단점

- 앱의 규모가 커지면서 자바스크립트의 파일이 너무 커진다는 것

하지만, 이 단점을 보완해줄 <b>코드 스플리팅</b>이 있어서 이 것을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩 속도를 개선할 수 있다.

- 자바스크립트가 실행될 때까지 페이지가 비어 있기 때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰 페이지가 나타날 수 있다.

이 점도 <서버 사이드 렌더링>을 통해 모두 해결할 수 있습니다.

<br>
<br>

## 프로젝트 준비와 라이브러리 설치

```
$npm install react-router-dom
$npm install qs
```

react-router-dom 와 qs 라이브러리를 설치해준다.

<br>
<br>

## 프로젝트에 라우터 적용

react-router-dom이 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다.

```
import {BrowserRouter} from 'react-router-dom'; // 추가
```

이 컴포넌트는 웹 애플리케이션에 HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용 할 수 있도록 해준다.

---

<br>
<br>

## Route 컴포넌트로 특정 주소에 컴포넌트 연결

Route라는 컴포넌트 사용하여 현재 경로에 따라 다른 컴포넌트를 보여주자.

```
<Route path="주소규칙" component={보여 줄 컴포넌트}>
```

<br>
<br>

## 1개의 컴포넌트만 나오게 하기 위해

```
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;

```

이렇게 exact 를 사용해야한다.
exact라는 props를 true 로 설정하면, 한 컴포넌트만 <b>localhost:3000/about</b> 경로에 나올 것이다.

<br>
<br>

## Link 컴포넌트를 사용하여 다른 주소로 이동하기

### Link 컴포넌트는 클릭하면 다른 주소로 이동시켜주는 컴포넌트 입니다. <br>

(= 네비게이션 같은 역할이다. nav 부분 )

일반 웹 앱에서는 a태그를 사용하여 페이지를 전환하는데, <b>리액트 라우터</b>를 사용 할 때는 이 태그를 직접 사용하면 안됩니다 !!!!

이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버리게 됩니다.

Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 <b>HTML5 History API</b>를 사용하여 <b>페이지의 주소</b>만 변경해준다.

<br>
<br>

## Route 하나에 여러 개의 path 설정하기

```
  <Route path="/" component={Home} exact={true}/>
  <Route path="/about" component={About}/>
  <Route path="/info" component={About}/>
```

이런식으로 여러개 path에 같은 컴포넌트를 보여줄 수 있다.
리액트 라우터 v5부터 적용된 기능이다.
렇게 Route를 두 번 사용하는 것보다 path props를 배열로 설정해주면 한 줄 코드로 가능하다.

```
  <Route path="/" component={Home} exact={true}/>
  <Route path={['/about', '/info']} component={About}/>
```

## URL 파라미터와 쿼리

- 파라미터 예시 : /profile/velopert
- 쿼리 예시 : /about?details=true

일반적으로 파라미터는 <특정 아이디> 혹은 <이름>을 사용하여 조회 할 때 사용.<br>
쿼리는 우리가 어떤 <키워드>를 검색하거나 <페이지에 필요한 옵션>을 전달 할 때 사용한다.

<br>

### URL 파라미터

일반적으로 파라미터는 <특정 아이디> 혹은 <이름>을 사용하여 조회 할 때 사용.

<br>

Profile.js 파일참조

```

const Profile = ({ match }) => {
  const {username}=match.params;
  const profile = data[username];

  if(!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return  (
    <div>
      <h3>
         {username}({profile.name})
      </h3>
      <p>
        {profile.description}
      </p>
    </div>
  )
};
```

URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조합니다.

<br>

App.js 파일 참조

```
      {...}
      import Profile from './Profile';

      {...}
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

```

이렇게 Link 부분과 Route 부분을 추가해주고 상호관계를 일치하게 해준다.

### URL 쿼리

쿼리는 우리가 어떤 <키워드>를 검색하거나 <페이지에 필요한 옵션>을 전달 할 때 사용

<br>

About.js 참조

쿼리는 location 객체에 들어 있는 search 갑셍서 조회할 수 있습니다. location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 앱의 현재 주소에 대한 정보를 지니고 있습니다.

```
  {
    "pathname":"/about",
    "search":"?detail=true",
    "hash":""
  }
```

위 location 객체는 http://localhost:3000/about/?detail=true
주소로 들어갔을 때의 값입니다.

URL 쿼리를 읽을 때는 위 객체가 지닌 값중에서 search 값을 확인해야 합니다. 이 값은 문자열 형태로 되어 있습니다. URL 쿼리는 ?detail=true&another=1과 같이 문자열에 여러가지 값을 설정해줄 수 있습니다.

search 값에서 특정 값을 읽어오기 위해서는 이 문자열을 객체 형태로 변환해 주어야합니다.

쿼리를 문자열 객체로 변환할 때는 qs라는 라이브러리를 사용합니다.

```

import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix : true // 이 설정을 통해 문자열 맨 앞의 ?를 생략
  });

  const showDetail = query.detail === 'true';
  // 쿼리의 파싱 결과 값은 문자열입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.</p>

      {showDetail && <p>detail 값을 true로 설정하셨군요 !</p>}
    </div>
  )
}
```

쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에 주의해야한다.

```
?value=1 혹은 ?value=true
```

와 같이 숫자나 논리 자료형을 사용한다고 해서 해당 값이 우리가 원하는 형태로 변환되는 것이 아니라, "1", "true"와 같이 문자열 형태로 받아진다.

그렇기 때문에 숫자를 받아 와야 하면 parseInt 함수를 통해 꼭 숫자로 변환해주고 지금처럼 논리 자료형 값을 사용해야 하는 경우에는 정확하게 "true" 문자열이랑 일치하는지 비교해야한다.

<br>
<br>

## 서브 라우트

서브 라우트는 라우트 내부에 또 라우트를 정의하는 것이다.
그냥 라우트로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 된다.

[Profiles.js] 에서

```
<Route
  path="/profiles"
  exact
  render={() => <div>사용자를 선택해 주세요.</div>}
/>
```

Route에 exact는 exact={true}와 같은 의미이다.
그리고 components 대신 render라는 props를 넣어줬다.
컴포넌트 자체를 전달하는 것이 아니라, 보여주고 싶은 JSX를 넣어 줄 수 있다.
지금처럼 따로 컴포넌트를 만들기 애매한 상황에 사용해도 되고, 컴포넌트에 props를 별도로 넣어 주고 싶을 때도 사용 할 수 있다.