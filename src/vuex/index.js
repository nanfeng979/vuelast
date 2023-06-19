import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    likes: [3, 2, 5, 0],
    favorites: [3, 2, 5, 0, 1],
    comments: [
      {
        artworkId: 2,
        comments: [
          '这是《海贼王》的第一条评论',
          '这是《海贼王》的第二条评论'
        ],
      },
      {
        artworkId: 0,
        comments: [
          '这是《向日葵》的第一条评论',
          '这是《向日葵》的第二条评论'
        ],
      },
      {
        artworkId: 1,
        comments: [
          '这是《奔马图》的第一条评论',
          '这是《奔马图》的第二条评论',
          '这是《奔马图》的第三条评论',
        ],
      }
    ],
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
    addNewComment(state, { artworkId, comment }) {
      const targetComment = state.comments.find(comment => comment.artworkId === artworkId);
      if (targetComment) {
        // targetComment.comments.push(comment);
        Vue.set(targetComment.comments, targetComment.comments.length, comment);
      } else {
        state.comments.push({
          artworkId,
          comments: [comment],
        });
      }
    },
  },
  actions: {
    toggleLike({ commit }, artworkId) {
      commit('toggleLike', artworkId);
    },
    toggleFavorite({ commit }, artworkId) {
      commit('toggleFavorite', artworkId);
    },
    addNewComment({ commit }, { artworkId, comment }) {
      commit('addNewComment', { artworkId, comment });
    },
  },
});

export default store;
