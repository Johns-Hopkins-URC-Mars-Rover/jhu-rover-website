// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// export const SITE_TITLE = 'Astro Blog';
// export const SITE_DESCRIPTION = 'Welcome to my website!';
// const NAV_ELEMS = ['About', ['Parent', 'Child1', 'Child2'], 'Projects', 'Blog', 'Contact']
export const NAV_ELEMS = ['about', 'rover', 'news', 'contact']
export const LINKS = [
  { label: 'home', slug: '', path: '', nav: ''},
  { label: 'about', slug: 'about', path: '/about', nav: 'about' },
  { label: 'rover', slug: 'updates', path: '/updates', nav: 'rover'},
  { label: 'news', slug: 'news', path: '/news', nav: 'news' },
  { label: 'contact', slug: 'contact', path: '/contact', nav: 'contact'},
]
export const DARK_THEME = 'dark-rover'
export const LIGHT_THEME = 'light-rover'