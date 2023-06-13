// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    likes: [3, 2, 5, 0],
    favorites: [3, 2, 5, 0, 1],
    comments: [
      {
        artworkId: 3,
        comments: [
          '这是3的第一条评论', 
          '这是3的第二条评论'
        ],
      },
      {
        artworkId: 2,
        comments: [
          '这是2的第一条评论', 
          '这是2的第二条评论'
        ],
      },
      {
        artworkId: 5,
        comments: [
          '这是5的第一条评论', 
          '这是5的第二条评论'
        ],
      },
      {
        artworkId: 0,
        comments: [
          '这是0的第一条评论', 
          '这是0的第二条评论'
        ],
      },
      {
        artworkId: 1,
        comments: [
          '这是1的第一条评论', 
          '这是1的第二条评论'
        ],
      }
    ],
    comments1: {
      '3': [
        '这是3的第一条评论',
        '这是3的第二条评论',
      ],
      '2': [
        '这是2的第一条评论',
        '这是2的第二条评论',
      ],
      '5': [
        '这是5的第一条评论',
        '这是5的第二条评论',
      ],
      '9': [
        '这是9的第一条评论',
        '这是9的第二条评论',
      ],
      '1': [
        '这是1的第一条评论',
        '这是1的第二条评论',
      ],
    }
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
