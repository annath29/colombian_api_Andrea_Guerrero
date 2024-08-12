import React, { useEffect } from "react";
import TableContent from "./TableContent";

const ShowDataProcessing = ({ obj }) => {
  console.log(obj);
  if (obj?.length > 0) {
    return (
      <>
        {obj.map((item, index) => {
          console.log(item);
          return <TableContent key={index} data={item} />;
        })}
      </>
    );
  }
  return null;
};

export default ShowDataProcessing;
