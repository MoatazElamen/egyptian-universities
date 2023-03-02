import React from "react";
import IUniversity from "../interfaces/IUniversity";
type IProps = {
  university: IUniversity;
};
const University: React.FC<IProps> = ({ university }): JSX.Element => {
  return (
    <div className="d-flex flex-column position-relative py-2  ">
      <div>{university.name}</div>
      <div>
        {" "}
        <a href={university.web_pages[0]}> {university.web_pages[0]}</a>
      </div>
      <div>{university.domains[0]}</div>
    </div>
  );
};
export default University;
