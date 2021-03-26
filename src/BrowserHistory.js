import React, { useEffect } from "react";

export default function HistoryShow() {
  useEffect(() => {
    window.onpopstate = function (event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);

  return (
    <div>
      <button onClick={() => window.history.pushState("v1", "", "/page1")}>
        page1
      </button>
      <button onClick={() => window.history.pushState("v1", "", "/page2")}>
        page2
      </button>
    </div>
  );
}

/*
/page1과 /page2로 번갈아 변경되는 것을 확인할 수 있다.
이때 서버로 요청이 가지 않고 화면도 변하지 않는다. 단지 스택에 state가 쌓일 뿐이다.
onpopstate 함수도 호출되지 않는다. useEffect 함수는 이벤트 핸들러를 등록하거나,
api를 호출하는 등의 부수 효과를 처리할 때 사용하는 훅이다.
*/
