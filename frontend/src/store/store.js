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
    friend: {
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
        datestart: '',
        dateEnd: '',
        place: '',
      },
    ],
    friendTimeline: [
      {
        datestart: '',
        dateEnd: '',
        place: '',
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
    setFriend: (state, data) => {
      state.friend = data;
    },
    setFriendTimeline: (state, data) => {
      state.friendTimeline = data;
    },
  },

  actions: {
    async isLogin(context) {
      try {
        const user = await axios.get('/api/logged/', { withCredentials: true });
        context.commit('setUser', user.data);
        console.log(user);
        let timeline = await axios.get(`/api/timeline/${user.data._id}`, { withCredentials: true });
        console.log(timeline);
        timeline = timeline.data.map((el) => {
          el.dateStart = new Date(Date.parse(el.dateStart));
          el.dateStartString = el.dateStart.toDateString().slice(4, 10);
          el.dateEnd = new Date(Date.parse(el.dateEnd));
          el.dateEndString = el.dateEnd.toDateString().slice(4, 10);
          return el;
        });
        timeline.sort((a, b) => a.dateStart - b.dateStart);
        console.log(timeline);
        context.commit('setTimeline', timeline);
        router.push(`/userPage/${this.$store.state.user._id}`);
        
      } catch (e) {
        console.log(e);
        // router.replace('/');
      }
    },
    async getFriendInfo(context, userId) {
      const user = await axios.get(`/api/user/${userId}`, { withCredentials: true });
      context.commit('setFriend', user.data);
      console.log(user);
      let timeline = await axios.get(`/api/timeline/${user.data._id}`, { withCredentials: true });
      console.log(timeline);
      timeline = timeline.data.map((el) => {
        el.dateStart = new Date(Date.parse(el.dateStart));
        el.dateStartString = el.dateStart.toDateString().slice(4, 10);
        el.dateEnd = new Date(Date.parse(el.dateEnd));
        el.dateEndString = el.dateEnd.toDateString().slice(4, 10);
        return el;
      });
      timeline.sort((a, b) => a.dateStart - b.dateStart);
      console.log(timeline);
      context.commit('setFriendTimeline', timeline);
    },
  },
});
