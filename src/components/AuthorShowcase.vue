<template>
    <div class="author-showcase author-showcase-button" @mouseleave="closeAuthorList()">
      <button @click="toggleAuthorList" :class="horizontal ? 'horizontal' : 'vertical'">
        作者展示{{ showAuthorList ? '收起' : '展开' }}
      </button>
      <ul v-if="showAuthorList">
        <li v-for="author in authors" :key="author.authorId" @click="showAuthorDetail(author)">
          <router-link :to="`/author/${author.authorId}`">{{ author.authorName }}</router-link>
          <!-- <a href="#">
            {{ author.authorName }}
          </a> -->
          <h5>{{ author.authorBio }}</h5>
        </li> 
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      authors: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        horizontal: false,
        showAuthorList: false // Initialize author list to not be shown
      }
    },
    methods: {
      toggleAuthorList() {
        this.horizontal = !this.horizontal
        this.showAuthorList = !this.showAuthorList
      },
      closeAuthorList() {
        this.horizontal = false
        this.showAuthorList = false
      },
      showAuthorDetail(author) {
        // Display author details (bio, notable works, etc.)
        this.$emit('show-author-detail', author);
      }
    },
  }
  </script>
  
  <style>
  .author-showcase-button {
    position: fixed;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    padding: 0.5rem 1rem;
    background-color: #eaeaea;
    color: #333;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    max-width: 160px;
  white-space: normal;
  word-wrap: break-word;
  z-index: 100;
  
  }
  
  .author-showcase-button:hover {
    background-color: #ddd;
  }
  
  .author-showcase-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
  
  .author-showcase ul {
    margin-top: 1rem;
    padding: 0;
    list-style: none;
  }
  
  .author-showcase li {
    margin-bottom: 0.5rem;
  }
  
  .author-showcase a {
    color: #333;
    text-decoration: none;
  }
  
  .author-showcase a:hover {
    text-decoration: underline;
  }

  .author-showcase h5 {
    overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  }

  .horizontal {
    writing-mode: horizontal-tb;
  }

  .vertical {
    writing-mode: vertical-rl;
  }
  </style>