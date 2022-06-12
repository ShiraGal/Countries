import { useContext, useState } from "react";
import { CountriesContext } from "../context/CountriesContext";

export default function Header(props) {
  const { countries, setCountries } = useContext(CountriesContext);

  const serchIt = function () {
    setCountries(
      props.allCountries.filter((v) =>
        v.name.common.toLowerCase().startsWith(input.value)
      )
    );
  };

  return (
    <header>
      <h1>Countries : {props.sum} </h1>
      <input
        id="input"
        type="text"
        className="search"
        placeholder="search"
        onChange={serchIt}
      ></input>
    </header>
  );
}
