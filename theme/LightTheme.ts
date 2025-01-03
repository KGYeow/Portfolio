import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const PurpleTheme: ThemeTypes = {
  name: 'PurpleTheme',
  dark: false,
  variables: {
    'border-color': '#eeeeee',
    'carousel-control-size': 10
  },
  colors: {
    topbar: '#111111',
    footer: '#232323',
    section: '#232323',
    card: '#232323',
    background: '#111111',
    primary: '#575757',
    secondary: '#7A7A7A',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    muted:'#5a6a85',
    lightprimary: '#ECF2FF',
    lightsecondary: '#E8F7FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#000',
    containerBg: '#ffffff',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface': '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4'
  }
};
export { PurpleTheme };