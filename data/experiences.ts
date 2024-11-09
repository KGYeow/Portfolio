export interface menu {
  timeStart?: string;
  timeEnd?: string;
  job?: string;
  company?: string;
  description?: string;
  skills?: string[];
}

const navbarItem: menu[] = [
  {
    job: 'About',
  },
  {
    job: 'Experience',
  },
  {
    job: 'Skills',
  },
  {
    job: 'Projects',
  },
  {
    job: 'Contact',
  },
]

export default navbarItem