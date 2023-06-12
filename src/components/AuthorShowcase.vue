<template>
  <div class="author-showcase author-showcase-button" @mouseleave="closeAuthorList()">
    <button @click="toggleAuthorList" :class="horizontal ? 'horizontal' : 'vertical'">
      作者展示{{ showAuthorList ? '收起' : '展开' }}
    </button>
    <ul v-if="showAuthorList" class="author-list">
      <li v-for="author in authors" :key="author.authorId" @click="showAuthorDetail(author)" class="author">
        <router-link :to="`/author/${author.authorId}`" class="author-link">{{ author.authorName }}</router-link>
        <p class="author-bio">{{ author.authorBio }}</p>
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
      showAuthorList: false
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
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  max-width: 160px;
  white-space: normal;
  word-wrap: break-word;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.author-showcase-button:hover {
  background-color: #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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

.author-showcase .author-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0 0;
  padding: 0;
}

.author-showcase .author {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  width: 200px;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
}

.author-showcase .author:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.author-showcase .author-link {
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  transition: color 0.2s ease-in-out;
}

.author-showcase .author-link:hover {
  color: #007bff;
}

.author-showcase .author-bio {
  margin: 0 1rem 1rem;
  font-size: 0.9rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.2s ease-in-out;
}

.author-showcase .author:hover .author-bio {
  color: #333;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
</style>