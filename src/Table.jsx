import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table">
      {data.map((item) => {
        <div className="first">
          <img src="" alt="" />
          <div className="second">
            <p> {item.firstName}</p>
            <p> vcfg</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Table;
