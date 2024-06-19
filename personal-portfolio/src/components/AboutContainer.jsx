import { useTranslation } from 'react-i18next';

const AboutContainer = () => {
  const { t } = useTranslation();
  return (
    <section className="about-container">
      <h2>{t('about.title')}</h2>
      <p> {t('about.description')} </p>
        {/* With over five years of tech experience, I excel in delivering
        innovative solutions and exceptional service. I specialize in Agile
        methodologies (SCRUM, Kanban), JavaScript (vanilla, AngularJS, Svelte,
        and ReactJS), HTML5, CSS, and databases (relational and non-relational).
      </p> */}
      <p> {t('about.education')} </p>
        {/* I hold an Associate Degree in Software Analysis and Development from
        Brazil and am pursuing a Bachelor's in Software Engineering at Brigham
        Young University - Idaho.
      </p> */}
    </section>
  );
};

export default AboutContainer;
