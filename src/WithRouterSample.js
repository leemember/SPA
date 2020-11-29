import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={10}
                readOnly={true}            
            />

            {/* withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸준다.
                JSON.stringify의 두 번째 파라미터와 세 번째 파라미터를 위와 같이
                null, 2로 설정해주면 JSON에 두 칸 정도 들여쓰기가 적용된 상태로 문자열이 만들어진다.
            */}

            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={10}
                readOnly={true}            
            />
            <button onClick={()=> history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(WithRouterSample);