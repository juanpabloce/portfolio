import logoReactHooks from '../assets/images/certifications/react-hooks.png';
import logoReact from '../assets/images/certifications/react.png';
import logoVite from '../assets/images/certifications/vite.png';
import logoVue3 from '../assets/images/certifications/vue-3.png';
import logoNestJS from '../assets/images/certifications/nestjs.png';
import logoNestJSModular from '../assets/images/certifications/nestjs-modular.png';

export interface ICertification {
  name: string;
  logo: string;
  link: string;
}

export type CardCertificationProps = {
  cardCertification: ICertification;
};

export const certifications: ICertification[] = [
  {
    name: 'Curso Profesional de REACT HOOKS',
    logo: logoReactHooks,
    link: '/certifications/certification-react-hooks.pdf',
  },
  {
    name: 'Curso de Introducción a REACT',
    logo: logoReact,
    link: '/certifications/certification-react.pdf',
  },
  {
    name: 'Curso reactividad con Vue.js 3',
    logo: logoVue3,
    link: '/certifications/certification-vue-3.pdf',
  },
  {
    name: 'NestJS - Programación Modular',
    logo: logoNestJS,
    link: '/certifications/certification-nestjs-modular.pdf',
  },
  {
    name: 'Curso de Backend con Nest.js',
    logo: logoNestJS,
    link: '/certifications/certification-nestjs.pdf',
  },
  {
    name: 'Curso de Vite.js',
    logo: logoVite,
    link: '/certifications/certification-vite.pdf',
  },
];
