// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelectorComponent() {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSelectorComponent;
