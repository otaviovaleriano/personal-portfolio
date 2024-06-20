import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    EN: {
      translation: {
        about: {
          title: "About",
          description: "With over five years of tech experience, I excel in delivering innovative solutions and exceptional service. I specialize in Agile methodologies (SCRUM, Kanban), JavaScript (vanilla, AngularJS, Svelte, and ReactJS), HTML5, CSS, and databases (relational and non-relational).",
          education: "I hold an Associate Degree in Software Analysis and Development from Brazil and am pursuing a Bachelor's in Software Engineering at Brigham Young University - Idaho. I am Native in Portuguese, Fluent in English, and Intermdiate in Spanish",
        },
        information: {
            phone: "Phone",
            located: "Located",
            download: "Download Resume"
        },
        technologies: {
            skills: "Skills"
        },
        projects: {
            projects: "Projects",
            check: "Check Projects"
        }
      }
    },
    PT: {
      translation: {
        about: {
          title: "Sobre",
          description: "Com mais de cinco anos de experiência em tecnologia, eu me destaco em fornecer soluções inovadoras e um serviço excepcional. Sou especializado em metodologias Ágeis (SCRUM, Kanban), JavaScript (vanilla, AngularJS, Svelte e ReactJS), HTML5, CSS e bancos de dados (relacionais e não relacionais).",
          education: "Tenho graduação como Técnologo em Análise e Desenvolvimento de Sistemas no Brasil e estou cursando um bacharelado em Engenharia de Software na Brigham Young University - Idaho. Sou Nativo em Português, Fluente em Inglês e Intermediário em Espanhol.",
        },
        information: {
            phone: "Telefone",
            located: "Residente Em",
            download: "Baixar Currículo"
        },
        technologies: {
            skills: "Habilidades"
        },
        projects: {
            projects: "Projetos",
            check: "Ver Projetos"
        }
      }
    }
  };
  

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "EN", // default language
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
