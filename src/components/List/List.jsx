import React from "react";

export const List = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item, i) => {
          return <li key={i+1
        
         }>{item}</li>;
        })}
      </ul>
    </div>
  );
};
