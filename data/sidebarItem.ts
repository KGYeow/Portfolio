import * as tablerIcon from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  auth?: boolean;
}

const sidebarItem: menu[] = [
  {
    title: 'Index',
    to: '/',
    auth: true
  },

  {
    title: 'Dashboard',
    to: '/dashboard',
    auth: true
  },

  {
    title: 'Sample',
    children: [
      {
        title: 'Sample Page',
        to: '/sample',
        auth: true
      },
      {
        title: 'Typography',
        to: '/sample/typography',
      },
      {
        title: 'Shadow',
        to: '/sample/shadow'
      },
      {
        title: 'Icons',
        to: '/sample/icons'
      },
    ]
  },
];

export default sidebarItem;