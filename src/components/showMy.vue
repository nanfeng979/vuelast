<template>
  <div class="show-my-container">
    <div class="section">
      <h2>收藏的画作</h2>
      <ul>
        <li v-for="artwork in favoriteArtworks" :key="artwork.id">
          《{{ artwork.title }}》
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>点赞的画作</h2>
      <ul>
        <li v-for="artwork in likedArtworks" :key="artwork.id">
          《{{ artwork.title }}》
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>评论过的画作</h2>
      <ul class="custom-list">
        <li v-for="(comments, index) in ArtworksComments" :key="index">
          <p class="artwork-title">《{{ artworks.find(item => item.id === comments.artworkId).title }}》</p>
          <ul class="comments-list">
            <li v-for="(comment, index_) in comments.comments" :key="index_">
              {{ comment }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    ArtworksComments() {
      return this.$store.state.comments.map(item => {
        return item;
      })
    },
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

.custom-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-list li {
  margin-bottom: 10px;
}

.artwork-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.comments-list {
  list-style-type: none;
  padding: 0;
}

.comments-list li {
  margin-bottom: 5px;
  text-align: left;
}

.comments-list li::before {
  content: "•";
  color: #999;
  font-size: 10px;
  margin-right: 5px;
}
</style>