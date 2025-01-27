import SEO from '@/lib/seo';

const title = '';
const route = '/';
const production = '';
const summary = '';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: '',
    alt: '',
  },
});

const HOME = { metadata, title, route, summary, production };
export default HOME;
