import SEO from '@/lib/seo';

const title = 'About Me';
const route = '/about';
const summary = '';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: '/assets/avatar.jpeg',
    alt: 'Avathar',
  },
});

const content = {
  introduction: {
    greeting: '',
    bio: summary,
    mission: '',
  },
  topics: {
    description: '',
    list: [
      {
        title: '',
        details: '',
      },
    ],
    closingNote: '',
  },
  closingMessage: '',
};

const ABOUT = { metadata, title, route, summary, content };
export default ABOUT;
