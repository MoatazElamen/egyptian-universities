import { useState, useEffect } from "react";
import IUniversity from "./interfaces/IUniversity";
import UniversitiesList from "./components/UniversitiesList";
const App: React.FC = (): JSX.Element => {
  const [universities, setUniversities] = useState<IUniversity[] | null>(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>("");

  const fetchUniversities = async () => {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=Egypt"
      ).then(res => res.json());
      return response;
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    const handleFetch: () => Promise<void> = async () => {
      let universities = await fetchUniversities();
      console.log(universities);
      setUniversities(universities);
    };
    handleFetch();
  }, []);

  return (
    <div className="App">
      {loading && <h3>Loading</h3>}
      {error && <div> {error}</div>}
      {universities && !loading ? (
        <div className="d-flex p-3 flex-column align-items-center justify-content-center">
          <UniversitiesList universities={universities} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
