import SEO from '@/lib/seo';

const title = 'Oops!';
const route = '/not-found';

const text =
  'Looks like that page took a little detour and doesn’t exist anymore.';

const parr = {
  line1: 'No worries! Head back to',
  line2: 'and keep exploring!',
};

const { metadata } = new SEO({
  title: 'Page not found',
  summary:
    'Looks like that page took a little detour and doesn’t exist anymore.',
  route,
  img: {
    url: '',
    alt: title,
  },
});

const NOT_FOUNT = { metadata, title, route, text, parr };

export default NOT_FOUNT;
