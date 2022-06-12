import { useState, useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { ChoiceContext } from "../context/ChoiceContext";
import { CountriesContext } from "../context/CountriesContext";

export default function OpenCountry(props) {
  const { pop, setPop } = useContext(PopupContext);
  const { choice, setChoice } = useContext(ChoiceContext);
  const { countries, setCountries } = useContext(CountriesContext);

  return (
    <div className="openCountry">
      <h1>{choice.name.common}</h1>
      <img src={choice.flags.png} className="openFlag"></img>
      <h2>Population: </h2>
      <h2 className="greyValue">{choice.population}</h2>
      <h2>Languages: </h2>
      <h2 className="greyValue">{Object.values(choice.languages)}</h2>
      <button onClick={() => setPop("close")}>close</button>
    </div>
  );
}
