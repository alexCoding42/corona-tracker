import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import Loading from "./Loading/Loading";
import moment from "moment";
import "moment/locale/fr";

import { RiVirusLine } from "react-icons/ri";
import { MdLocalHospital } from "react-icons/md";
import { GiDeathSkull } from "react-icons/gi";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    moment.locale(i18n.language);
  });

  if (!confirmed) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        {/* Infected card */}
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-delay="400"
          className="pt-6 px-4 w-full text-center md:w-4/12 lg:pt-12"
        >
          <div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white border-b-8 border-red-800 rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-red-800 rounded-full shadow-lg">
                <RiVirusLine />
              </div>
              <h6 className="text-xl font-semibold">{t("cards.infected")}</h6>
              <p className="mb-4 mt-2 text-gray-600">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </p>
              <p className="text-xs italic">
                {t("date")} {moment(lastUpdate).fromNow()}
              </p>
            </div>
          </div>
        </div>

        {/* Recovered card */}
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-delay="400"
          className="pt-6 px-4 w-full text-center md:w-4/12 lg:pt-12"
        >
          <div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white border-b-8 border-green-600 rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-green-600 rounded-full shadow-lg">
                <MdLocalHospital />
              </div>
              <h6 className="text-xl font-semibold">{t("cards.recovered")}</h6>
              <p className="mb-4 mt-2 text-gray-600">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </p>
              <p className="text-xs italic">
                {t("date")} {moment(lastUpdate).fromNow()}
              </p>
            </div>
          </div>
        </div>

        {/* deaths card */}
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-delay="400"
          className="pt-6 px-4 w-full text-center md:w-4/12 lg:pt-12"
        >
          <div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white border-b-8 border-purple-900 rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-purple-900 rounded-full shadow-lg">
                <GiDeathSkull />
              </div>
              <h6 className="text-xl font-semibold">{t("cards.deaths")}</h6>
              <p className="mb-4 mt-2 text-gray-600">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </p>
              <p className="text-xs italic">
                {t("date")} {moment(lastUpdate).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
