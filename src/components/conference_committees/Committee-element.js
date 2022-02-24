import React, { useState } from "react";
import "./Committee.css";

function CommitteeElement(props) {
  const [committee, setCommittee] = useState(props.committee);

  return (
    <div className="section-title">
      <h3>{props.name}</h3>
      <hr className="fancy-line" />
      <div>
        <ul>
          {committee.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommitteeElement;
