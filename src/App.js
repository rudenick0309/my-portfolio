import React from "react";

class App extends React.Component {
  state = {
    contents: [1, 2, 3, 4], //나중에 여기에 데이터(파란네모가 들어가는 것)
  };
  render() {
    const { contents } = this.state; //서버 구동되면 이미지 다시 넣을 것
    return (
      <div>
        {/* <img src="/header-image.png" alt="a" /> */}
        <div>{contents.map((content) => console.log(content))}</div>;
        <div>
          <button onClick={function () {}}>소개</button>
          <button>경력</button>
          <button>솰라솰라</button>
        </div>
      </div>
    );
  }
}

export default App;
