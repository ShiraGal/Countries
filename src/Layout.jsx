import { useEffect, useState } from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import { CountriesContext } from "./context/CountriesContext";

export default function Layout() {
  const [countries, setCountries] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setAll(data);
      });
  }, []);

  return (
    <div>
      <CountriesContext.Provider value={{ countries, setCountries }}>
        <Header allCountries={all} sum={countries.length} />
        <Main />
      </CountriesContext.Provider>
    </div>
  );
}
