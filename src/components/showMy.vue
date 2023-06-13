<template>
  <div class="show-my-container">
    <div class="section">
      <h2>收藏的画作</h2>
      <ul>
        <li v-for="artwork in favoriteArtworks" :key="artwork.id">
          {{ artwork.title }}
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>点赞的画作</h2>
      <ul>
        <li v-for="artwork in likedArtworks" :key="artwork.id">
          {{ artwork.title }}
        </li>
      </ul>
    </div>
    <!-- <div class="section">
      <h2>评论过的画作</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.content }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ShowMy',
  props: {
    artworks: {
      type: Array,
      required: true,
    }
  },
  computed: {
    favoriteArtworks() {
      return this.$store.state.favorites.map(favoriteId => {
        return this.artworks.find(artwork => artwork.id === favoriteId);
      });
    },
    likedArtworks() {
      return this.$store.state.likes.map(likesId => {
        return this.artworks.find(artwork => artwork.id === likesId);
      });
    },
    // likedArtworks() {
    //   return this.artworks.filter(artwork => this.likes.includes(artwork.id));
    // },
  },
};
</script>

<style>
.show-my-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
}

.section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 0 10px;
  flex: 1;
}

.section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.section ul {
  list-style-type: none;
  padding: 0;
}

.section li {
  margin-bottom: 5px;
}
</style>