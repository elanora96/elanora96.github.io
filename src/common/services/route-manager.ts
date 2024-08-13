import { Manager } from '@lomray/react-route-manager';

const manager = new Manager({
  routes: {
    home: {
      url: '/',
    },
    resume: {
      url: '/resume',
    },
  },
});

export default manager;
