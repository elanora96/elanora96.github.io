import { Manager } from '@lomray/react-route-manager';

const manager = new Manager({
  routes: {
    home: {
      url: '/',
    },
    resume: {
      url: '/resume',
    },
    originalHome: {
      url: '/original-home',
    },
  },
});

export default manager;
