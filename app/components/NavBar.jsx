import NavItem from './NavItem';

const navItems = [
  {
    label: 'Why Cypress?',
    path: '/',
    dataTest: 'nav-why-cypress',
  },
  {
    label: 'Overview',
    path: '/overview',
  },
  {
    label: 'Fundamentals',
    path: '/fundamentals',
  },
  {
    label: 'Forms',
    path: '/forms',
  },
  {
    label: 'Examples',
    path: '/examples',
    dataTest: 'nav-example',
  },
  {
    label: 'Component',
    path: '/component',
  },
  {
    label: 'Best Practices',
    path: '/best-practices',
  },
];

export default function NavBar() {
  return (
    <ul className='nav-bar'>
      {navItems.map((item) => (
        <NavItem key={item.label} label={item.label} path={item.path} dataTest={item.dataTest} />
      ))}
    </ul>
  );
}
