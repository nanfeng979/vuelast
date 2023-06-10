<template>
    <div class="artwork-details">
      <img :src="artwork.fullImage" alt="Artwork">
      <h2>{{ artwork.name }}</h2>
      <p>By {{ artwork.artist }}</p>
      <!-- 添加更多画作详细信息的展示 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArtworkDetails',
    props: ['artwork'],
    mounted() {
      // 在这里可以根据artwork参数获取并展示更多详细信息
    }
  }
  </script>
  
  <!-- <style scoped>
  .artwork-details {
    /* 添加画作详情样式 */
  }
  </style> -->
  