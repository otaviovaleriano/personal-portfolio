import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from "react-icons/di";

import { useTranslation } from 'react-i18next';

import '../styles/components/technologies-container.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5/> }, 
    { id: "css", name: "CSS3", icon: <DiCss3/> }, 
    { id: "js", name: "JavaScript", icon: <DiJsBadge/> }, 
    { id: "node", name: "Node.js", icon: <DiNodejsSmall/> }, 
    { id: "mysql", name: "MySQL", icon: <DiMysql/> }, 
    { id: "react", name: "React", icon: <DiReact/>}
];

const TechnologiesContainer = () => {
    const { t } = useTranslation(); 

  return (  
    <section className="technologies-container">
        <h2>{t("technologies.skills")}</h2>
        <div className="technologies-grid">
            {technologies.map((skill) => (
                <div className="technology-card" id={skill.id} key={skill.id}>
                    {skill.icon}
                    <div className="technology-information">
                        <h3>{skill.name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default TechnologiesContainer;
