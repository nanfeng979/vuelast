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
      <div class="section">
        <h2>评论过的画作</h2>
        <ul>
          <li v-for="comment in comments" :key="comment.id">
            {{ comment.content }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favoriteArtworks: [
          { id: 1, title: '画作1' },
          { id: 2, title: '画作2' },
          { id: 3, title: '画作3' },
        ],
        likedArtworks: [
          { id: 4, title: '画作4' },
          { id: 5, title: '画作5' },
          { id: 6, title: '画作6' },
        ],
        comments: [
          { id: 7, content: '评论1' },
          { id: 8, content: '评论2' },
          { id: 9, content: '评论3' },
        ],
      };
    },
  }
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
  