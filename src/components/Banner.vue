<template>
    <div class="banner">
      <img :src="bannerImage" alt="Banner Image" />
      <h1>{{ bannerTitle }}</h1>
      <p>{{ bannerText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Banner',
    data() {
      return {
        bannerImage: '/path/to/banner-image.jpg', // 临时图片路径
        bannerTitle: 'Welcome to the Art Exhibition', // 临时标题
        bannerText: 'Explore the world of art and discover amazing artworks', // 临时文本
      };
    },
  };
  </script>
  
  <style scoped>
  .banner {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .banner img {
    max-width: 100%;
    height: auto;
  }
  
  .banner h1 {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .banner p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  </style>
  