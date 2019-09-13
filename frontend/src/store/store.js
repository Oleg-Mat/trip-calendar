import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import router from '../router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userName: '',
      company: '',
      email: '',
      userId: '',
      avatar: '',
      website: '',
      timeLine: [{}],
    },
    userTimeline: [
      {
        datestart: new Date(),
        dateEnd: new Date(),
        place: 'Moscow',
      },
    ],
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    setUser: (state, data) => {
      state.user = data;
    },
    setTimeline: (state, data) => {
      state.userTimeline = data;
    },
  },

  actions: {
    /* getUserData(context) {
      axios.get('/api/user/', { withCredentials: true }).then((res) => {
        const user = res.data;
        context.commit('setUser', user);
      });
      axios.get('/api/timeLine/', { withCredentials: true }).then((res) => {
        const timeline = res.data.map((el) => {
          el.dateStart = new Date(Date.parse(el.dateStart));
          el.dateStartString = el.dateStart.toDateString().slice(4, 10);
          el.dateEnd = new Date(Date.parse(el.dateEnd));
          el.dateEndString = el.dateEnd.toDateString().slice(4, 10);
          return el;
        });
        context.commit('setTimeline', timeline);
      });
    }, */
    isLogin(context) {
      axios
        .get('/api/logged/', { withCredentials: true })
        .then((res) => {
          const user = res.data;
          context.commit('setUser', user);
          console.log(user)
          router.push('/userPage')

        })
        .catch((err) => {});
    },
  },
});
