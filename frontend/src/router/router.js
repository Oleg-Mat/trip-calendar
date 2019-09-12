import Vue from 'vue';
import Router from 'vue-router';
import userPage from '@/components/userPage';
import timeLineElement from '@/components/timeLineElement';
import timeLinePage from '@/components/timeLinePage';


Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'timeLineElement',
//       component: timeLineElement,
//     },
//     {
//       path: '/',
//       name: 'user',
//       component: userPage,
//     },
//   ],
// });


export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: userPage,
    },
    {
      path: '/timeline',
      name: 'timeLine',
      component: timeLinePage,
      props: true,
    },
  ],
});
