import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function App(props: any) {
  const { t } = useTranslation();
  const [laguage, setLanguage] = useState("en");
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <div className="container">
      <select value={laguage} onChange={(e) => changeLang(e.target.value)}>
        <option value="en">{t('EN')}</option>
        <option value="vi">{t('VI')}</option>
      </select>
      <h2>{t("Welcome to React")}</h2>
      {props.children}
    </div>
  );
}

export default App;
