import { useTranslation } from 'react-i18next';


const ProjectsContainer = () => {

  const { t } = useTranslation();

  return (
    <section className="projects-container">
      <h2>{t('projects.projects')}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas eos
        eligendi quidem. Dicta blanditiis porro quasi velit, recusandae unde
        placeat at facere molestiae, neque in eius aspernatur, eos illo
        repudiandae.
      </p>

      <a className="btn" href="https://github.com/otaviovaleriano" target="_blank"> {t('projects.check')} </a>
    </section>
  );
};

export default ProjectsContainer;
