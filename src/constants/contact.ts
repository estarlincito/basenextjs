import SEO from '@/lib/seo';

const title = 'Contact';
const route = '/contact';
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

const CONTACT = { metadata, title, route, summary };
export default CONTACT;
