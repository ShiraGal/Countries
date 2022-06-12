import CountryList from "./CountryList";
import OpenCountry from "./OpenCountry";
import { useState } from "react";
import { PopupContext } from "../context/PopupContext";
import { ChoiceContext } from "../context/ChoiceContext";

export default function Main() {
  const [pop, setPop] = useState("close");
  const [choice, setChoice] = useState([]);

  return (
    <main>
      <PopupContext.Provider value={{ pop, setPop }}>
        <ChoiceContext.Provider value={{ choice, setChoice }}>
          <div>{pop === "open" ? <OpenCountry></OpenCountry> : null}</div>
          <CountryList />
        </ChoiceContext.Provider>
      </PopupContext.Provider>
    </main>
  );
}
