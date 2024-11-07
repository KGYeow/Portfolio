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
  { header: 'Home' },
  {
    title: 'Dashboard',
    icon: tablerIcon.LayoutDashboardIcon,
    to: '/dashboard',
    auth: true
  },
  { header: 'Sample Section' },
  {
    title: 'Sample',
    icon: tablerIcon.LayersSubtractIcon,
    children: [
      {
        title: 'Sample Page',
        icon: tablerIcon.ApertureIcon,
        to: '/sample',
        auth: true
      },
      {
        title: 'Typography',
        icon: tablerIcon.TypographyIcon,
        to: '/sample/typography',
      },
      {
        title: 'Shadow',
        icon: tablerIcon.CopyIcon,
        to: '/sample/shadow'
      },
      {
        title: 'Icons',
        icon: tablerIcon.MoodHappyIcon,
        to: '/sample/icons'
      },
    ]
  },
];

export default sidebarItem;