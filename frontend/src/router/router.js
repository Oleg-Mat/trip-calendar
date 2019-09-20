import Vue from 'vue';
import Router from 'vue-router';
import userPage from '@/components/userPage';
import login from '@/components/login';
import timeLinePage from '@/components/timeLinePage';
import mapPage from '@/components/mapPage';
import addTimeline from '@/components/addTimelinePage';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/timeline/:userId',
      name: 'timeLine',
      component: timeLinePage,
      props: true,
    },
    {
      path: '/userPage/:userId',
      name: 'userPage',
      component: userPage,
      props: true,
    },
    {
      path: '/mapPage',
      name: 'mapPage',
      component: mapPage,
      props: true,
    },
    {
      path: '/addTimeline',
      name: 'addTimeline',
      component: addTimeline,
      props: true,
    },
  ],
});
