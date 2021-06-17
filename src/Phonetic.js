import React from "react";

export default function phonetic(props) {
  return (
    <div className="Phonetic">
      [
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>
      ] {props.phonetic.text}
    </div>
  );
}
