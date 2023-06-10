<template>
    <div class="artwork-list">
      <div v-for="(artwork, index) in artworks" :key="index" class="artwork-card">
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
    },
  };
  </script>
  
  <style>
  .artwork-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 30px;
  }
  
  .artwork-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .artwork-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  
  .artwork-card:hover img {
    transform: scale(1.1);
  }
  
  .artwork-card .title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease-in-out;
  }
  
  .artwork-card:hover .title {
    bottom: 50%;
  }
  
  .artwork-card .artist {
    position: absolute;
    bottom: 0;
    left: 10px;
    margin: 0;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out;
  }
  
  .artwork-card:hover .artist {
    bottom: 0;
  }
  
  .artwork-card .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  
  .artwork-card:hover .description {
    opacity: 1;
  }
  </style>