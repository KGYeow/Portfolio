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
    auth: true
  },
  {
    title: 'Experience',
    auth: true
  },
  {
    title: 'Skills',
    auth: true
  },
  {
    title: 'Projects',
    auth: true
  },
  {
    title: 'Contact',
    auth: true
  },
]

export default navbarItem