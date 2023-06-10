<template>
    <div class="artwork-list">
      <div v-for="(artwork, index) in filteredArtworks" :key="index" class="artwork">
        <img :src="artwork.imageSrc" :alt="artwork.title">
        <div class="artwork-details">
          <h3>{{ artwork.title }}</h3>
          <p>{{ artwork.artist }}</p>
        </div>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .artwork {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 200px;
    text-align: center;
  }
  
  .artwork img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .artwork h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .artwork p {
    font-size: 14px;
    color: #999;
  }
  </style>