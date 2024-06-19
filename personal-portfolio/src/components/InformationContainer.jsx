import React from 'react'
import "../styles/components/information-container.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import { useTranslation } from 'react-i18next';


const InformationContainer = () => {

    const { t } = useTranslation(); 

  return <section id='information'>
    <div className="info-card">
        <AiFillPhone className="phone-icon"/>
        <div>
            <h3>
                {t('information.phone')}
            </h3>
            <p>
                (385) 370-4382
            </p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail className="mail-icon"/>
        <div>
            <h3>
                Email
            </h3>
            <p>
                otaviovalerianoss@gmail.com
            </p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment className="location-icon"/>
        <div>
            <h3>
            {t('information.located')}
            </h3>
            <p>
                Hellxburg-Idaho
            </p>
        </div>
    </div>

  </section>
}

export default InformationContainer
