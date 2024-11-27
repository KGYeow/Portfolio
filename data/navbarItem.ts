import * as tablerIcon from "vue-tabler-icons";

export interface menu {
  title?: string;
  icon?: any;
  to?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  auth?: boolean;
}

const navbarItem: menu[] = [
  {
    title: 'About',
    to: '#title-about',
  },
  {
    title: 'Experience',
    to: '#title-experiences',
  },
  {
    title: 'Projects',
    to: '#title-projects',
  },
]

export default navbarItem