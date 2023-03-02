import { useState, useEffect } from "react";
import IUniversity from "../interfaces/IUniversity";
import University from "./University";
type IProps = {
  universities: IUniversity[];
};

const UniversitiesList: React.FC<IProps> = ({ universities }): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setQuery(value);
  };
  useEffect(() => {
    console.log(query);
  }, [query]);
  const showingUniversities: IUniversity[] =
    query === ""
      ? universities
      : universities?.filter(university => {
          return university.name
            .toLowerCase()
            .includes(query.trim().toLowerCase());
        });
  return (
    <div className="row m-3 d-flex ">
      <div className="d-flex justify-content-center mb-2">
        <div className="row col-6">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>
      <div className="row flex justify-content-center">
        {showingUniversities?.map((university, k) => (
          <div key={k} className=" col-11 col-md-5 border m-1">
            <University university={university} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UniversitiesList;
