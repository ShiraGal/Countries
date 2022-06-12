import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import { PopupContext } from "../context/PopupContext";
import { ChoiceContext } from "../context/ChoiceContext";

export default function Country(props) {
  const { countries, setCountries } = useContext(CountriesContext);
  const { pop, setPop } = useContext(PopupContext);
  const { choice, setChoice } = useContext(ChoiceContext);

  const open = function () {
    setPop("open");
    setChoice(countries.find((v) => v.name.common === props.name));
  };

  return (
    <div className="countryInList" onClick={() => open()}>
      <img src={props.flag} className="roundFlag"></img>
      <div className="miniText">
        <span className="nameCountry">
          <b>{props.name}</b> -{props.capital}
        </span>
        <div className="continent">{props.continent}</div>
      </div>
    </div>
  );
}
