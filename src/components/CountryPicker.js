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
    <div className="col-span-6 sm:col-span-3 my-5">
      <select
        id="country"
        name="country"
        autocomplete="country"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
