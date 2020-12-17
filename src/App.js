import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      setData(await fetchData());
    };

    fetchApi();

    AOS.init();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    </>
  );
}

export default App;
