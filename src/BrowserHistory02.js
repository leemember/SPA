import React, { useEffect, useState } from "react";

export default function HistoryShow02() {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    window.onpopstate = (event) => {
      setPageName(event.state);
    };
  }, []);

  //버튼 1
  function onClick1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }
  //버튼 2
  function onClick2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }
  return (
    <>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>

      {/* page1,2와 바뀜과 동시에 내용물도 바뀐다. */}
      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </>
  );
}

// 이 컴포넌트에 담긴 retrun 값으로 ! !
function Home() {
  return <h2>여기는 홈페이지입니다.</h2>;
}
function Page1() {
  return <h2>여기는 페이지 1입니다.</h2>;
}
function Page2() {
  return <h2>여기는 페이지 2입니다.</h2>;
}

/*
Window 인터페이스의 popstate 이벤트는 사용자의
세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생합니다.
만약 활성화된 엔트리가 history.pushState() 메서드나 
history.replaceState() 메서드에 의해 생성되면, popstate 이벤트의 
state 속성은 히스토리 엔트리 state 객체의 복사본을 갖게 됩니다.
 */
