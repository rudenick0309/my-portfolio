import React from "react";

function Audio() {
  return (
    <audio autoPlay loop>
      <source src="3.mp3" type="audio/mp3" />
    </audio>
  );
}

export default Audio;
//새로고침 몇 번 하다보면 멈추네?
