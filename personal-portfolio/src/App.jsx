import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import './i18n';

import "./styles/components/app.sass"

function App() {
    const {i18n } = useTranslation();

    const toggleLanguage = () => {
      const newLang = i18n.language === 'EN' ? 'PT' : 'EN';
      console.log(`Changing language from ${i18n.language} to ${newLang}`);
      i18n.changeLanguage(newLang);
    };

  return (
    <>
      <div id="portfolio">
        <header className="App-header">
          <h1>Otavio Silva</h1>
          <button onClick={toggleLanguage} className="language-toggle">
            {i18n.language === 'EN' ? (
              <>
              <span>Language</span> <br />
                <span className="fi fi-us fis"></span> EN
              </>
            ) : (
              <>
              <span>Idioma</span> <br />
                <span className="fi fi-br fis"></span> PT
              </>
            )}
          </button>
        </header>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App
