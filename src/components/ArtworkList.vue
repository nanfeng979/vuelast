<template>
  <div class="artwork-list">
    <div v-for="(artwork, index) in filteredArtworks" :key="index" class="artwork-card"
      @click="showArtworkDetail(artwork)">
      <img :src="require('@/' + artwork.imageSrc)" :alt="artwork.title" />
      <h3 class="title">{{ artwork.title }}</h3>
      <p class="artist">{{ artwork.artist }}</p>
      <p class="description">{{ artwork.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkList',
  props: {
    artworks: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: null,
    },
  },
  methods: {
    showArtworkDetail(artwork) {
      this.$emit('show-artwork-detail', artwork);
    }
  },
  computed: {

    filteredArtworks() {
      if (!this.selectedCategory) {
        return this.artworks;
      }
      return this.artworks.filter((artwork) => artwork.category === this.selectedCategory);
    },
  },
};
</script>

<style>
.artwork-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc((100% - 40px) / 3), 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;
  margin: 30px auto;
  max-width: 90%;
  justify-content: center;
}

.artwork-card {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  
}

.artwork-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  /* clip-path: inset(18%); */
  transform: scale(0.8);
}

.artwork-card:hover img {
  transform: scale(1); 
  clip-path: none;
}

.artwork-card .title {
  margin-top: 10px;
  margin-bottom: 0;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.artwork-card:hover .title {
  margin-top: 0;
}

.artwork-card .artist {
  margin-top: 5px;
  margin-bottom: 0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.artwork-card:hover .artist {
  margin-top: 0;
}

.artwork-card .description {
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.artwork-card:hover .description {
  margin-top: 0;
  opacity: 1;
}
</style>