import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const { t } = useTranslation();
  console.log(history)
  const notifi: any = history.location.state;
  if(notifi === undefined) {
    history.push('/login')
  }

  return (
    <h2 className="notifi-success">{t(notifi)}</h2>
  );
};

export default Home;
