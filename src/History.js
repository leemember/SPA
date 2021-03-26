import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    const unBlock = history.block("정말 떠나실 건가요 ?");
    return () => {
      unBlock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로가기</button>
    </div>
  );
}

export default HistorySample;
