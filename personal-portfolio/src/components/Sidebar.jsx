import SocialMedia from "./SocialMedia";
import InformationContainer from "./InformationContainer";

import React from "react";
import { useTranslation } from 'react-i18next';
import Avatar from "../img/otavio.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {

  const { t } = useTranslation(); 
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Otavio Silva" />
      <p className="title">Full-Stack Web Developer To Be</p>
      <SocialMedia />
      <InformationContainer/>
      <a href="/OtavioSilvaResume.pdf" className="btn" download target="_blank">
        {t('information.download')}      </a>
    </aside>
  );
}; 

export default Sidebar;
