// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    likes: [3, 2, 9, 0],
    favorites: [3, 2, 9, 0],
    comments: [3, 2, 9, 0],
  },
  getters: {
    isLiked: state => artworkId => state.likes.includes(artworkId),
  },
  mutations: {
    toggleLike(state, artworkId) {
      if (state.likes.includes(artworkId)) {
        Vue.delete(state.likes, state.likes.findIndex(like => like === artworkId));
      } else {
        Vue.set(state.likes, state.likes.length, artworkId);
      }
    },
    toggleFavorite(state, artworkId) {
      if (state.favorites.includes(artworkId)) {
        Vue.delete(state.favorites, state.favorites.findIndex(favorite => favorite === artworkId));
      } else {
        Vue.set(state.favorites, state.favorites.length, artworkId);
      }
    },
    addComment(state, { artworkId, comment }) {
      if (!state.comments[artworkId]) {
        Vue.set(state.comments, artworkId, []);
      }
      state.comments[artworkId].push(comment);
    },
  },
  actions: {
    toggleLike({ commit }, artworkId) {
      commit('toggleLike', artworkId);
    },
    toggleFavorite({ commit }, artworkId) {
      commit('toggleFavorite', artworkId);
    },
    addComment({ commit }, { artworkId, comment }) {
      commit('addComment', { artworkId, comment });
    },
  },
});

export default store;
