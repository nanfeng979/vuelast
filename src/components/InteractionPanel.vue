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
        <li v-for="(comment_, index_) in comments" :key="index_">
          <p v-for="(comment, index) in comment_" :key="index">
            <span>{{ comment }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'InteractionPanel',
  props: {
    artwork: {
      type: Object,
      required: true,
    }
  },
  computed: {
    isLiked() {
      return this.$store.state.likes.includes(this.artwork.id);
    },
    isFavorite() {
      return this.$store.state.favorites.includes(this.artwork.id);
    },
    comments() {
      return this.$store.state.comments.map(item => {
        if(item.artworkId === this.artwork.id) {
          return item.comments;
        }
      })
    }
  },
  data() {
    return {
      showCommentForm: false,
      comment: '',
    };
  },
  methods: {
    toggleLike() {
      this.$store.dispatch('toggleLike', this.artwork.id);
    },
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.artwork.id);
    },
    toggleCommentForm() {
      this.showCommentForm = !this.showCommentForm;
    },
    addComment() {
      if (this.comment) {
        this.$store.dispatch('addComment', { artworkId: this.artwork.id, comment: this.comment });
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
  