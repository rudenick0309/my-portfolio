import React from "react";
import "./App.css";
import Explain from "./Explain";
import Audio from "./Audio";

class App extends React.Component {
  state = {
    index: "main",
    contents: [1, 2, 3, 4], //나중에 여기에 데이터(파란네모가 들어가는 것)
    //이벤트를 통해서 screen[인덱스] << 이렇게 주면 될거 같은데, '소개'라면, screen[1] 이렇게?
    //위 screen[인덱스]를 count로 구현하면은? 그니까, count로 인덱스를 줘버리면?
  };

  handleExplainEvent = async () => {
    this.setState({
      index: "Explain",
    });
    const { index } = this.state;
    console.log({ index });
    if ({ index } === "Explain") {
      await console.log("맞습니다");
    }
  };

  render() {
    const { contents } = this.state; //서버 구동되면 이미지 다시 넣을 것
    return (
      <div>
        {/* <Audio /> */}
        <img class="header-image" src="/header-image.png" alt="a" />
        <div>
          메인 첫 화면
          <Explain contents={contents} />
        </div>
        <div>
          <button onClick={this.handleExplainEvent}>소개</button>
          <button>경력</button>
          <button>솰라솰라</button>
        </div>
      </div>
    );
  }
}

export default App;
