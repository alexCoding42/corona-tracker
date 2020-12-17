import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { fetchCountries } from "../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setFetchedCountries]);

  return (
    <div className="col-span-6 my-5 sm:col-span-3">
      <select
        id="country"
        name="country"
        autocomplete="country"
        className="block mt-1 px-3 py-2 w-full bg-white border border-gray-300 focus:border-indigo-500 rounded-md focus:outline-none shadow-sm focus:ring-indigo-500 sm:text-sm"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option name="" value="">
          {t("countryPicker.global")}
        </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
