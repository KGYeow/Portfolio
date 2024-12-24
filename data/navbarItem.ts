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
    icon: 'mdi-information-outline',
    to: '#section-aboutme',
  },
  {
    title: 'Experience',
    icon: 'mdi-briefcase-outline',
    to: '#section-experiences',
  },
  {
    title: 'Projects',
    icon: 'mdi-folder-open-outline',
    to: '#section-projects',
  },
]

export default navbarItem