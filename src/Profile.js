import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  velopert: {
    name : '김민준',
    description : '리액트를 좋아하는 개발자'
  },
  gildong : {
    name : '홍길동',
    description : '고전 소설 홍길동전의 주인공'
  }
};

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
      <WithRouterSample />
    </div>
  )
};

export default withRouter(Profile);

// const Profile = ({ match }) => {
//  const {username}=match.params;
//  const profile = data[username];
// match라는 객체 안의 params 값을 참조합니다.


// profiles말고 profile에다
// WithRouterSample과 withRouter을 넣어야 match에 params 값이 뜬다.