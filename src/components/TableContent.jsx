import React from "react";

const TableContent = ({ data }) => {
  if (data != null) {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
   
    let obj = []
    Object.keys(data[0]).forEach(key => {
        if (typeof data[0][key] === 'object' && data[0][key] !== null && !Array.isArray(data[0][key])) {
          obj.push(key)
        }
      });
    return (
      <table className="table">
        <thead>
          <tr className="table__head_row">
            {headers.map((header) => (
                header == "id" ? <td className=" table__head_col table__id" key={header}>{header}</td>:
              <th className="table__head_col" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="table__body_row" key={index}>
              {headers.map((header) => (
                header == "id" ? <td className=" table__body_col table__id" key={header}>{row[header] == null ? "---": row[header] }</td>:
                <td className=" table__body_col" key={header}> { row[header] == null ? "---": obj.includes(header) ? row[header].name : row[header]  }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default TableContent;
