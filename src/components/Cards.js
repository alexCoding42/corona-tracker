import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import Loading from "./Loading/Loading";
import moment from "moment";
import "moment/locale/fr";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    moment.locale(i18n.language);
  });

  if (!confirmed) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="max-w-xs bg-white shadow-xl rounded-md px-20 py-5 border-b-8 border-red-800">
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {t("cards.infected")}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </p>
          <p>{t("date")}</p>
          <p>{moment(lastUpdate).fromNow()}</p>
        </div>
      </div>

      <div className="max-w-xs bg-white shadow-xl rounded-md px-20 py-5 border-b-8 border-green-800">
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {t("cards.recovered")}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </p>
          <p>{t("date")}</p>
          <p>{moment(lastUpdate).fromNow()}</p>
        </div>
      </div>

      <div className="max-w-xs bg-white shadow-xl rounded-md px-20 py-5 border-b-8 border-purple-800">
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {t("cards.deaths")}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </p>
          <p>{t("date")}</p>
          <p>{moment(lastUpdate).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
