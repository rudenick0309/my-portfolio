import React from "react";
import "./App.css";
import Explain from "./Explain";
import Audio from "./Audio";

class App extends React.Component {
  state = {
    contents: [1, 2, 3, 4], //나중에 여기에 데이터(파란네모가 들어가는 것)
    //이벤트를 통해서 screen[인덱스] << 이렇게 주면 될거 같은데, '소개'라면, screen[1] 이렇게?
  };

  render() {
    const { contents } = this.state; //서버 구동되면 이미지 다시 넣을 것
    return (
      <div>
        <Audio />
        <img class="header-image" src="/header-image.png" alt="a" />
        {/* <Explain /> */}
        <div>{contents[0]}</div>
        {console.log("콘솔 테스트", contents)}
        <div>
          <button
            onClick={function () {
              console.log("소개 버튼");
            }}
          >
            소개
          </button>
          <button>경력</button>
          <button>솰라솰라</button>
        </div>
      </div>
    );
  }
}

export default App;
