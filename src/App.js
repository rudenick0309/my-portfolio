import React from "react";

class App extends React.Component {
  state = {
    content: 1,
  };
  render() {
    const { content } = this.state;
    // <img src = 'header-image.'
    return <div>{content}</div>;
  }
}

export default App;
