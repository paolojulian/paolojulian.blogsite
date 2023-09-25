interface NavbarItem {
  href: string;
  name: string;
  isActive: (pathname: string | null) => boolean;
}

export const navbarItems: NavbarItem[] = [
  {
    href: '/',
    name: 'About',
    isActive: (pathname) => pathname === '/',
  },
  {
    href: '/blogs',
    name: 'Articles',
    isActive: (pathname) => pathname === '/blogs',
  },
  {
    href: '/components',
    name: 'Components',
    isActive: (pathname) => pathname === '/components',
  },
  {
    href: '/contact',
    name: 'Contact',
    isActive: (pathname) => pathname === '/contact',
  },
]