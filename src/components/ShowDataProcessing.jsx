import React, { useEffect } from "react";
import TableContent from "./TableContent";

const ShowDataProcessing = ({ obj }) => {
  if (obj?.length > 0) {
    return (
      <>
        {obj.map((item, index) => {
          return <TableContent key={index} data={item} />;
        })}
      </>
    );
  }
  return null;
};

export default ShowDataProcessing;
