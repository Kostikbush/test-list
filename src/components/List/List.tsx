"use client";
import { createRef, FC, memo, RefObject, useCallback } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import useFetch from "@/hooks/useFetch";
import { Card } from "../Card/Card";

const FETCH_URL =
  "https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json";

interface Country {
  flag_url: string;
  name_ru: string;
  iso_code2: string;
  iso_code3: string;
}

const List: FC = () => {
  const [countries, isLoading, error, setCountries] =
    useFetch<Country[]>(FETCH_URL);

  const deleteCountry = useCallback(
    (id: string) => {
      console.log("WORK");
      setCountries(
        (prev) => prev?.filter((country) => country.iso_code2 !== id) ?? []
      );
    },
    [setCountries]
  );

  if (isLoading) {
    <span>загрузка...</span>;
  }

  if (error) {
    return <span>Ошибка загрузки стран</span>;
  }

  if (countries?.length === 0) {
    <span>Список стран пуст</span>;
  }

  return (
    <TransitionGroup
      component={"ul"}
      className="country-list flex flex-col gap-6 pl-4"
    >
      {countries?.map((country) => {
        const nodeRef = createRef<HTMLDivElement | undefined>();

        return (
          <CSSTransition
            key={country.iso_code2}
            timeout={500}
            nodeRef={nodeRef}
            classNames="item"
          >
            <div ref={nodeRef as RefObject<HTMLDivElement>}>
              <Card
                flag_url={country.flag_url}
                name_ru={country.name_ru}
                id={country.iso_code2}
                deleteCountry={deleteCountry}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

List.displayName = "List";

export default memo(List);
