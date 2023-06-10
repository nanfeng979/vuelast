<template>
    <div class="author-detail">
      <h2>{{ selectedAuthor.authorName }}</h2>
      <p>{{ selectedAuthor.authorBio }}</p>
      <div v-for="artWorkList in selectedAuthor.artWorkList" :key="artWorkList.artWorkName" class="artwork">
        <h3>{{ artWorkList.artWorkName }}</h3>
        <p>{{ artWorkList.artworkDescription }}</p>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios'
export default {
    name: 'AuthorDetail',
    data() {
        return {
          authorList: [],
          selectedAuthorId: 0,
          selectedAuthor: {},
        }
    },
    created() {
        // this.fetchAuthorDetails();
        axios.get('http://127.0.0.1:5000/data')
        .then(response => {
          this.selectedAuthor = response.data.authorList[this.$route.params.id]
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
        fetchAuthorDetails() {
            // Fetch author details using this.$route.params.id
            // Assign the retrieved data to this.author

        },
    },
};
</script>
  

<style>
.author-detail {
  text-align: center;
}

.author-detail h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.author-detail p {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.author-detail .artwork {
  margin-top: 30px;
}

.author-detail .artwork h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.author-detail .artwork p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}
</style>