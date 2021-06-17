import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './assets/stylesheet/style.scss'

function App(props: any) {
  const { t } = useTranslation();
  const [laguage, setLanguage] = useState('en');
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
      {props.children}
    </div>
  );
}

export default App;
