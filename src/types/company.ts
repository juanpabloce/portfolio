import { Technology } from './about';
import imageMasiv from '../assets/images/companies/masiv.png';
import imageUno27 from '../assets/images/companies/uno27.png';
import imageNeverbit from '../assets/images/companies/neverbit.png';

export interface Company {
  name: string;
  logo: string;
  content: string;
  link: string;
  rol: string;
  date: string;
  technologies: Technology[];
  isActive: boolean;
}

export type CardCompanyProps = {
  cardCompany: Company;
};

export const companies: Company[] = [
  {
    name: 'Masivian SAS',
    logo: imageMasiv,
    content: 'Lorem ipsum',
    link: 'https://masiv.com',
    rol: 'Frontend Developer',
    date: '2021/11 - Present',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'Vuex',
      'Vue Router',
      'Bulma',
      'Sass',
      'Git',
      'Figma',
      'Azure DevOps',
      'AWS',
    ],
    isActive: true,
  },
  {
    name: 'Uno27 SAS',
    logo: imageUno27,
    content: 'Lorem ipsum',
    link: 'https://uno27.com',
    rol: 'Coordinador TI - Frontend Developer',
    date: '2019/12 - 2021/11',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Sass', 'Git', 'Figma', 'Jira'],
    isActive: true,
  },
  {
    name: 'Neverbit',
    logo: imageNeverbit,
    content: 'Lorem ipsum',
    link: 'https://neverbit.com',
    rol: 'Backend Developer',
    date: '2020/11 - 2021/01',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Git', 'Trello', 'Postman', 'AWS'],
    isActive: true,
  },
];
