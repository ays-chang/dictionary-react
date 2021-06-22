import React from "react";

import "./Phonetic.css";

export default function phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="Text">{props.phonetic.text}</span>
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>
    </div>
  );
}
