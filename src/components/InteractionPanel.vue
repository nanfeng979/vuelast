<template>
    <div class="interaction-panel">
      <button @click="toggleLike" :class="{ active: isLiked }">
        {{ isLiked ? '取消点赞' : '点赞' }}
      </button>
      <button @click="toggleFavorite" :class="{ active: isFavorite }">
        {{ isFavorite ? '取消收藏' : '收藏' }}
      </button>
      <button @click="toggleCommentForm">评论</button>
      <div v-if="showCommentForm" class="comment-form">
        <textarea v-model="comment" placeholder="请输入评论"></textarea>
        <button @click="addComment">提交评论</button>
      </div>
      <div v-if="comments.length" class="comments">
        <h3>评论列表</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InteractionPanel',
    data() {
      return {
        isLiked: false,
        isFavorite: false,
        showCommentForm: false,
        comment: '',
        comments: [],
      };
    },
    methods: {
      toggleLike() {
        this.isLiked = !this.isLiked;
      },
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
      },
      toggleCommentForm() {
        this.showCommentForm = !this.showCommentForm;
      },
      addComment() {
        if (this.comment) {
          this.comments.push(this.comment);
          this.comment = '';
        }
      },
    },
  };
  </script>
  
  <style>
  .interaction-panel {
    margin-top: 20px;
  }
  
  .interaction-panel button {
    margin-right: 10px;
  }
  
  .interaction-panel button.active {
    color: red;
    font-weight: bold;
  }
  
  .interaction-panel .comment-form textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }
  
  .interaction-panel .comments {
    margin-top: 20px;
  }
  
  .interaction-panel .comments h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .interaction-panel .comments ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  