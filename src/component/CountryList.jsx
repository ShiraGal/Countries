import { useContext } from "react";
import Country from "./Country";
import { CountriesContext } from "../context/CountriesContext";

export default function CountryList() {
  const { countries, setCountries } = useContext(CountriesContext);

  return (
    <div className="list">
      {countries.map((c) => (
        <Country
          name={c.name.common}
          flag={c.flags.png}
          continent={c.continents}
          capital={c.capital}
        />
      ))}
    </div>
  );
}
