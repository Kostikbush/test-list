"use client";

import { type Country } from "@/api/getCountries";
import { useState, type FC } from "react";
import { Card } from "../Card/Card";
import { AnimatePresence } from "motion/react";

interface ClientListPropsType {
  countries: Country[];
}

const ClientList: FC<ClientListPropsType> = ({ countries }) => {
  const [state, setState] = useState(countries);

  const deleteCountry = (id: string) => {
    setState((prev) => prev.filter((county) => county.id !== id));
  };

  return (
    <AnimatePresence mode="popLayout">
      {state.map((country) => {
        return (
          <Card
            key={country.id}
            flag_url={country.url}
            name_ru={country.name}
            id={country.id}
            deleteCountry={deleteCountry}
          />
        );
      })}
    </AnimatePresence>
  );
};

ClientList.displayName = "ClientList";

export default ClientList;
