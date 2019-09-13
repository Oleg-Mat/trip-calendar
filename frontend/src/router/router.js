import Vue from 'vue';
import Router from 'vue-router';
import userPage from '@/components/userPage';
import login from '@/components/login';
import timeLinePage from '@/components/timeLinePage';


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/timeline',
      name: 'timeLine',
      component: timeLinePage,
      props: true,
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage,
      props: true,
    },
  ],
});
