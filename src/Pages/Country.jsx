import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  console.log(search, filter);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    
   
    return country;

    
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;

      console.log("Acsending CLick");
    return country.region === filter;

    
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <div>
      {isPending ? (
        <div
          style={{
            width: "100%",
            height: "50rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "30px" }}>Loading...</h1>
        </div>
      ) : (
        <section className="country-section">
          <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countries={countries}
            setCountries={setCountries}
          />

          <ul className="grid grid-four-cols">
            {filterCountries.map((currCountry) => {
              return (
                <CountryCard
                  country={currCountry}
                  key={currCountry.name.common}
                />
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Country;
