import React from "react";
import "./App.css";
import Explain from "./Explain";
import Audio from "./Audio";
import Career from "./Career";
import Shala from "./Shala";

class App extends React.Component {
  state = {
    index: "Main",
    contents: [1, 2, 3, 4], //나중에 여기에 데이터(파란네모가 들어가는 것)
    //이벤트를 통해서 screen[인덱스] << 이렇게 주면 될거 같은데, '소개'라면, screen[1] 이렇게?
    //위 screen[인덱스]를 count로 구현하면은? 그니까, count로 인덱스를 줘버리면?
  };

  handleExplainEvent = () => {
    this.setState(
      () => ({
        index: "Explain",
      }),
      () => {
        const { index } = this.state;
        if (index === "Explain") {
          console.log("소개입니다");
        }
      }
    );
  };

  // ---------------------
  handleCareerEvent = () => {
    this.setState(
      () => ({
        index: "Career",
      }),
      () => {
        const { index } = this.state;
        if (index === "Career") console.log("경력입니다");
      }
    );
  };
  // ------------------
  handleShalaEvent = () => {
    this.setState(
      () => ({
        index: "Shala",
      }),
      () => {
        const { index } = this.state;
        if (index === "Shala") console.log("솰라입니다");
      }
    );
  };
  // ----------
  render() {
    const { contents, index } = this.state; //서버 구동되면 이미지 다시 넣을 것
    return (
      <div>
        <Audio />
        <img class="header-image" src="/header-image.png" alt="a" />
        <div>
          {/* 메인 첫 화면이자, 버튼 이벤트들의 결과가 렌더링 되는 곳 */}
          {index === "Main" ? (
            <div class="main-box">{contents[0]} </div>
          ) : index === "Explain" ? (
            <Explain contents={contents[1]} />
          ) : index === "Career" ? (
            <Career contents={contents[2]} />
          ) : index === "Shala" ? (
            <Shala contents={contents[3]} />
          ) : null}
        </div>
        <div>
          <button onClick={this.handleExplainEvent}>소개</button>
          <button onClick={this.handleCareerEvent}>경력</button>
          <button onClick={this.handleShalaEvent}>솰라솰라</button>
        </div>
      </div>
    );
  }
}

export default App;
